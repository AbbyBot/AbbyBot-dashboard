import React, { useContext, useEffect } from 'react'
import { Dropdown } from './Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faSignIn } from '@fortawesome/free-solid-svg-icons'
import abbylogo from '../assets/abbybot_logo.png'
import { AuthContext } from '../context/AuthContext'
import { DISCORD_AVATAR_URL } from '../environ'
import { useNavigate, Link } from 'react-router-dom'
import { useModal } from '../context/ModalProvider'
import { Modal } from './Modal'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'

export default function Header() {
    const { user, logout, login } = useContext(AuthContext);
    const { createModal, dismissModal } = useModal()

    const redirect = useNavigate()
    const performLogout = () => {
        redirect('/')
        logout()
    }

    const logoutModal = createModal({
        title: 'Logout',
        body: 'Are you sure you want to logout?',
        buttons: [
            <Modal.Button className='btn-primary' onClick={performLogout}>Yes</Modal.Button>,
            <Modal.Button className='btn-secondary' onClick={dismissModal}>No</Modal.Button>
        ]
    })

    return <header className='bg-navbar'>
        <div className='mr-4 ml-4'>
            <nav className='navbar'>
                <div className='d-flex'>
                    <Link to='/' className='brand'>
                        <img src={abbylogo} alt='Abbybot Logo' style={{ width: 40, height: 40, borderRadius: '50%' }} />
                        <span className='text-light'>AbbyBot Dashboard</span>
                    </Link>
                    <Dropdown>
                        <Dropdown.Button bodyId='abbybot-project-dropdown'>
                            <FontAwesomeIcon icon={faGlobeAmericas} />
                            AbbyBotProject
                        </Dropdown.Button>
                        <Dropdown.Body id='abbybot-project-dropdown'>
                            <Dropdown.Item onClick={() => window.open("https://abbybotproject.com", "_blank")}>AbbyBot Project (website)</Dropdown.Item>
                            <Dropdown.Item onClick={() => window.open("https://github.com/abbybot", "_blank")}>GitHub Organization</Dropdown.Item>
                        </Dropdown.Body>
                    </Dropdown>
                </div>
                <ul className='nav'>
                    {user ?
                        <Dropdown>
                            <Dropdown.Button bodyId='abbybot-user-dropdown'>
                                <img src={DISCORD_AVATAR_URL + `${user.data.id}/${user.data.avatar}?size=256`} style={{ width: 40, height: 40, borderRadius: '50%' }} alt="Discord user image" />
                                {user.data.username}
                            </Dropdown.Button>
                            <Dropdown.Body id='abbybot-user-dropdown'>
                                <Dropdown.Item onClick={logoutModal.show}>Log Out</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                        :
                        <li className='nav-item'>
                            <button className='btn-link' onClick={login}>
                                <FontAwesomeIcon icon={faSignIn} />
                                Login with Discord
                            </button>
                        </li>}
                </ul>
            </nav>
        </div>
    </header>
}
