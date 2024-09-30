import axios from "axios";
import { createContext, useState } from "react";
import { ABBYBOT_API_URL, DISCORD_BASE_URL, DISCORD_CLIENT_ID, DISCORD_SECRET, DISCORD_TOKEN__URL } from "../env";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";


const AuthContext = createContext({
    user: null as any,
    loading: false,
    servers: null as any,
    login: () => { },
    authenticate: () => { },
    exchangeCode: (code: any, redirect: () => void) => { },
    logout: () => { },
});


const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const [servers, setServers] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const login = () => {
        window.location.href = DISCORD_BASE_URL;
    }

    const exchangeCode = (code: any, redirect: () => void) => {
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
            setCookie("at", data.data.access_token, { expires: data.data.expires_in, path: "/", secure: true, sameSite: "strict" });
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
        removeCookie("at");
    }
    const authenticate = () => {
        setLoading(true);
        const token = getCookie("at");
        if (token && !user) {
            try {
                const fetchUser = async () => {
                    let userData = await axios.get("https://discord.com/api/users/@me", {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    setUser(userData.data);
                    let serversData = await axios.get(ABBYBOT_API_URL + "/user-servers?user_id=" + userData.data.id, {
                        headers: {}
                    })
                    setServers(serversData.data);
                }
                fetchUser();
                
                
            } catch (error) {   
                return null;
            }
        }
        setLoading(false);
        return null;
    }

    const value = {
        user,
        loading,
        servers,
        login,
        exchangeCode,
        authenticate,
        logout
    }

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}

export { AuthProvider, AuthContext }