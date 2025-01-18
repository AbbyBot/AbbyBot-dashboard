import abby_online from '../assets/abby.png'
import abby_offline from '../assets/abby-offline.png'
import { useNavigate } from 'react-router-dom'
import { DISCORD_ADD_BOT_URL } from '../environ';
import { useContext, useEffect, useState } from 'react';
import { BotContext } from '../context/BotProvider';

import styles from './Home.module.scss' 

export default function Home() {
    const redirect = useNavigate();
    const botContext = useContext(BotContext);
    const [isLoading, setLoading] = useState(true);

    const getStatus = async () => {
        await botContext.getStatus();
        setLoading(false);
    };

    useEffect(() => {
        getStatus();
    }, []);

    if (isLoading) {
        return
    }

    return (
        <main className='content container grid grid-6 p-4'>
            <section className='column-3 fs-4 p-4 text-light'>
                <div>
                    <h1>Manage AbbyBot, your server's versatile companion.</h1>
                    <p>
                        Welcome to the AbbyBot Administration Panel. AbbyBot is a multifunctional tool designed to enhance the administration and entertainment of your Discord server. 
                        Through this panel, you can customize AbbyBot to suit your needs, including changing its language, enabling or disabling events, and accessing various other features.
                    </p>
                    <div className='d-flex gap-2'>
                        <button className='btn-primary fs-2 p-4' onClick={() => window.open(DISCORD_ADD_BOT_URL)}>Add AbbyBot to my server</button>
                        <button className='btn-secondary fs-2 p-4' onClick={() => redirect('/dashboard')}>Go to Dashboard</button>
                    </div>
                </div>
            </section>

            <section className='column-3 content fs-4 p-4 d-flex flex-column justify-content-center align-items-center gap-4'>
                <img 
                    className={`${styles['abby-animation']} ${botContext.status === 'Offline' ? styles['abby_offline'] : styles['abby_online']}`} 
                    draggable={false} 
                    src={botContext.status === 'Online' ? abby_online : abby_offline} 
                    alt="" 
                    style={{ objectFit: 'contain' }} 
                    height={400} 
                />
                <span className='text-center text-light'>Servers using AbbyBot: <i className='text-tertiary'>{ botContext.serversCount }</i></span>
                <span className='text-center text-light'>Bot Status: <i className='text-tertiary'>{ botContext.status }</i></span>
            </section>
        </main>
    );
}
