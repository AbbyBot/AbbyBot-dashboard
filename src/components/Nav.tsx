import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faList, faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { DISCORD_AVATAR_URL, DISCORD_BASE_URL } from '../env'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, DropdownButton, MenuItem } from './Dropdown'

export default function Nav({ isAuthenticated }: any) {
    const { user, logout } = useContext(AuthContext)
    const [showUserDropdown, setShowUserDropdown] = useState(false)

    const redirect = useNavigate()
    const performLogout = () => {
        redirect('/')
        logout()
    }
    /* If user is not authenticated, display login button */
    if (!isAuthenticated) {
        return <ul className='nav'>
            <li className='nav-item'>
                <button className='btn-link text-condensed' onClick={() => window.location.href = `${DISCORD_BASE_URL}`}>
                    <FontAwesomeIcon icon={faRightToBracket} color="white" size="sm" />
                    Login
                </button>
            </li>
        </ul>
    }
    /* If user is authenticated, display options */
    return <>
        <ul className='nav'>
            <li className='nav-item'>
                <button className='btn-link text-condensed'>
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
                <DropdownButton onClick={() => redirect("/dashboard/profile")}>
                    <img className='circled' draggable="false" src={DISCORD_AVATAR_URL + `${user.id}/${user.avatar}?size=16`} alt="" />
                    {user.username}
                </DropdownButton>
                <Dropdown show={showUserDropdown}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Dropdown>
            </li>
        </ul>
    </>
}
