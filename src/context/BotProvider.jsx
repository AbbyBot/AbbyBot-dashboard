import { createContext, useState, useEffect } from "react";
import { ABBYBOT_API_URL } from "../environ";
import axios from "axios";
import capitalize from "capitalize";
export const BotContext = createContext({
    getStatus: async () => { },
    status: 'offline',
    serversCount: null
})

export const BotProvider = ({ children }) => {
    const [status, setStatus] = useState(null);
    const [serversCount, setCount] = useState(null);

    const getStatus = async () => {
        try {
            let botInfo = await axios.get(`${ABBYBOT_API_URL}/bot-info`);
            setStatus(capitalize(botInfo.data.status));
            setCount(botInfo.data.server_count);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStatus();
    }, []);

    return (
        <BotContext.Provider value={{ getStatus, status, serversCount }}>
            {children}
        </BotContext.Provider>
    );
};