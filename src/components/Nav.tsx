import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faList, faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { DISCORD_AVATAR_URL, DISCORD_BASE_URL } from '../env'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from './Dropdown'
import { Modal } from './Modal'

export default function Nav({ isAuthenticated }: any) {
    const { user, logout, loading } = useContext(AuthContext)
    const [showUserDropdown, setShowUserDropdown] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const redirect = useNavigate()
    const performLogout = () => {
        redirect('/')
        logout()
    }
    /* If user is not authenticated, display login button */
    if (!isAuthenticated) {
        return <ul className='nav'>
            <li className='nav-item'>
                {!loading ?
                    <button className='btn-link text-condensed' onClick={() => window.location.href = `${DISCORD_BASE_URL}`}>
                        <FontAwesomeIcon icon={faRightToBracket} color="white" size="sm" />
                        Login
                    </button>
                    :
                    <div className='spinner spinner-sm'></div>
                }
            </li>
        </ul>
    }
    /* If user is authenticated, display options */
    return <>
        <ul className='nav'>
            <li className='nav-item'>
                <button className='btn-link text-condensed' onClick={() => redirect('/dashboard/select-server')}>
                    <FontAwesomeIcon icon={faServer} size="sm"></FontAwesomeIcon>
                    Manage servers
                </button>
            </li>
            <li className='nav-item'>
                <button className='btn-link text-condensed text-secondary'>
                    <FontAwesomeIcon icon={faList} size="sm"></FontAwesomeIcon>
                    Logs
                </button>
            </li>
            <li className='nav-item'>
                <button className='btn-link text-condensed text-secondary'>
                    <FontAwesomeIcon icon={faGear} size="sm"></FontAwesomeIcon>
                    Settings
                </button>
            </li>
            <li className='nav-item'>
                <button className='btn-link text-condensed text-secondary'>
                    <FontAwesomeIcon icon={faCircleInfo} size="sm"></FontAwesomeIcon>
                    About
                </button>
            </li>
            <li className='nav-item'>
                <Dropdown>
                    <Dropdown.Button onClick={() => setShowUserDropdown(!showUserDropdown)} className="btn-link text-condensed">
                        <img className='circled' src={DISCORD_AVATAR_URL + `${user.id}/${user.avatar}?size=16`} alt="" />
                        {user.username}
                    </Dropdown.Button>
                    <Dropdown.Body show={showUserDropdown}>
                        <Dropdown.Item onClick={() => redirect('/dashboard/profile')}>
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setShowConfirmModal(true)}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Body>
                </Dropdown>
            </li>
        </ul>
        <Modal id="confirm-logout" visible={showConfirmModal}>
            <Modal.Header title="Logout" onClose={() => setShowConfirmModal(false)} />
            <Modal.Body>
                Are you sure you want to logout?
            </Modal.Body>
            <Modal.Footer>
                <Modal.Button color="btn-secondary" onClick={() => setShowConfirmModal(false)}>Cancel</Modal.Button>
                <Modal.Button color="btn-primary" onClick={performLogout}>Logout</Modal.Button>
            </Modal.Footer>
        </Modal>
    </>
}
