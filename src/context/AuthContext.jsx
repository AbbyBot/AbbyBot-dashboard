import axios from "axios";
import { DISCORD_CLIENT_ID, DISCORD_SECRET, DISCORD_BASE_URL, DISCORD_TOKEN__URL, ABBYBOT_API_URL } from "../environ";
import { useState, createContext } from "react";
import Cookies from "js-cookie";
const AuthContext = createContext({
    user: null,
    loading: false,
    isAuthenticated: false,
    error: null,
    login: () => { },
    authenticate: () => { },
    exchangeCode: (code, redirect) => { },
    logout: () => { },
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null)
    const login = () => {
        window.location.href = DISCORD_BASE_URL;
    }

    const exchangeCode = (code, redirect) => {
        const getCode = async () => {
            let data = await axios.post(DISCORD_TOKEN__URL,
                {
                    client_id: DISCORD_CLIENT_ID,
                    client_secret: DISCORD_SECRET,
                    grant_type: "authorization_code",
                    code,
                    redirect_uri: "http://localhost:5173/auth",
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            document.cookie = `at=${data.data.access_token}; expires=${data.data.expires_in}; path=/; secure; sameSite=strict`;
            redirect()
        }
        try {
            getCode();
        } catch (error) {
            return error;
        }

    }

    const logout = () => {
        window.location.href = "/";
        setUser(null);
        setIsAuthenticated(false);
        document.cookie = "at=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; secure; sameSite=strict";
    }
    const authenticate = () => {
        setLoading(true);
        const token = Cookies.get("at");
        if (token && !user) {
            const fetchUser = async () => {
                try {
                    let userInfo = await axios.get("https://discord.com/api/users/@me", { headers: { "Authorization": `Bearer ${token}` } })
                    let userServersInfo = await axios.get(`${ABBYBOT_API_URL}/user-servers?user_id=${userInfo.data.id}`);
                    let abbyUserInfo = await axios.get(`${ABBYBOT_API_URL}/user-info?user_id=${userInfo.data.id}`);
                    setUser({ data: userInfo.data, abbybot: { userServers: userServersInfo.data, userInfo: abbyUserInfo.data } });
                    setIsAuthenticated(true);
                } catch (error) {
                    setError(error)
                } 
            }
            fetchUser()
        }
    }


    const value = {
        user,
        loading,
        isAuthenticated,
        error,
        login,
        exchangeCode,
        authenticate,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}




export { AuthProvider, AuthContext }

