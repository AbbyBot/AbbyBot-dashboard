import abbyLogo from '../assets/abbybot-logo.png';
import { ChartLine, Globe, Globe2, LogIn } from 'lucide-react';

export function Header() {
    return <header className="bg-navbar header">
        <nav className='container navbar'>
            <div style={{ width: "100%", display: "flex" }}>
                <section className="brand">
                    <img draggable="false" src={abbyLogo} alt="" width={50} height={50} />
                    <span className='text-mono text-light'>AbbyBot-Dashboard</span>
                </section>
                <section>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <button className='btn-link text-condensed'>
                                <ChartLine color='white' size={16} />
                                Dashboard
                            </button>
                        </li>
                        <li className='nav-item text-condensed'>
                            <button className='btn-link text-condensed'>
                                <Globe color='white' size={16} />
                                AbbyBotProject
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
            <div>
                <ul className='nav'>
                    <li className='nav-item'>
                        <button className='btn-link text-condensed'>
                            <LogIn color='white' size={16} />
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}