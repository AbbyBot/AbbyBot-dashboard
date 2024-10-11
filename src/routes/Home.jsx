import abby from '../assets/abby.png'
import { useNavigate } from 'react-router-dom'
import { ABBYBOT_API_URL, DISCORD_ADD_BOT_URL } from '../environ';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
    const redirect = useNavigate();
    const [serversCount, setServersCount] = useState(0);
    const [serverStatus, setServerStatus] = useState("Offline");

    useEffect(()  => {
        const fetchBotInfo = async () => {
            let botInfo = await axios.get(`${ABBYBOT_API_URL}/bot-info`);
            setServersCount(botInfo.data.server_count);
            if (botInfo.data.status) setServerStatus(botInfo.data.status);
        } 
        fetchBotInfo();
    }, [])

    return (
        <main className='content container grid grid-6 p-4'>
            <section className='column-3 fs-4 p-4 text-light'>
                <div>
                    <h1>Set AbbyBot, your server companion.</h1>
                    <p>
                        AbbyBot is a multifunctional tool for administration and entertainment purposes for Discord servers. If you're here, I'm sure you already know this.
                        In this panel you can configure it your way, either by changing its language, activating or deactivating events, among other functions.
                    </p>
                    <div className='d-flex gap-2'>
                        <button className='btn-primary fs-2 p-4' onClick={() => window.open(DISCORD_ADD_BOT_URL)}>Add AbbyBot to my server</button>
                        <button className='btn-secondary fs-2 p-4' onClick={() => redirect('/dashboard')}>Go to Dashboard</button>
                    </div>
                </div>
            </section>

            <section className='column-3 content fs-4 p-4 d-flex flex-column justify-content-center align-items-center gap-4'>
                <img className='abby-animation' draggable={false} src={abby} alt="" style={{ objectFit: 'contain' }} height={400} />
                <span className='text-center text-light'>Abbybots server's count: <i className='text-tertiary'>{ serversCount }</i></span>
                <span className='text-center text-light'>Bot Status: <i className='text-tertiary'>{ serverStatus }</i></span>
            </section>
        </main>
    )
}
