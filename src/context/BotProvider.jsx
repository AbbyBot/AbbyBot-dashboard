import { createContext, useState } from "react";
import { ABBYBOT_API_URL } from "../environ";
import axios from "axios";
import capitalize from "capitalize";
export const BotContext = createContext({
    getStatus: async () => { },
    status: 'offline',
    isLoading: false,
    serversCount: 0
})

export const BotProvider = ({ children }) => {
    const [status, setStatus] = useState('offline')
    const [serversCount, setCount] = useState(0)
    const [isLoading, setLoading] = useState(false)

    const getStatus = async () => {
        try {
            setLoading(true)
            let botInfo = await axios.get(`${ABBYBOT_API_URL}/bot-info`);
            setStatus(capitalize(botInfo.data.status));
            setCount(botInfo.data.server_count)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    return <BotContext.Provider value={{ getStatus, status, isLoading, serversCount }}>
        {children}
    </BotContext.Provider>
}