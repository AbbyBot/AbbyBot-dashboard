import axios from "axios";
import { getCookie } from "typescript-cookie";

export default async function asyncfetchUser() {
    const token = getCookie("at");
    let data = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return data.data;
}