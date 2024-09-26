import abbyLogo from '../assets/abbybot-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGlobe, faRightToBracket, faChevronDown, faExternalLinkAlt, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { Dropdown } from './Dropdown';
export function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, loading } = useContext(AuthContext);
    const redirect = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="bg-navbar header">
            <nav className='container navbar'>
                <div style={{ width: "100%", display: "flex" }}>
                    <section className="brand btn-link rounded" onClick={() => redirect("/")}>
                        <img draggable="false" src={abbyLogo} alt="" width={50} height={50} />
                        <span className='text-light text-mono' style={{ fontSize: "14px" }}>AbbyBot-Dashboard</span>
                    </section>
                    <section>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <button className='btn-link text-condensed' onClick={() => redirect("/dashboard")}>
                                    <FontAwesomeIcon icon={faChartLine} color="white" size="sm" />
                                    Dashboard
                                </button>
                            </li>
                            <li className='nav-item text-condensed'>
                                <Dropdown>
                                    <Dropdown.Button onClick={toggleDropdown}>
                                        <FontAwesomeIcon icon={faEarthAmericas} color="white" size="sm" />
                                        AbbyBot Project
                                    </Dropdown.Button>
                                    <Dropdown.Body show={dropdownOpen}>
                                        <Dropdown.Item>
                                            <a className='text-dark' href="https://abbybot.cl">
                                                <FontAwesomeIcon icon={faGlobe} size="sm" /> AbbyBot (website)
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a className='text-dark' href="https://github.com/abbybot">
                                                <FontAwesomeIcon icon={faGithub} size="sm" /> GitHub Organization
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a  className='text-dark' href="https://reyesandfriends.cl/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /> reyesandfriends.cl
                                            </a>
                                        </Dropdown.Item>
                                    </Dropdown.Body>
                                </Dropdown>
                            </li>
                        </ul>
                    </section>
                </div>
                <div>
                    <Nav isAuthenticated={!!user} />
                </div>
            </nav>
        </header>
    );
}
