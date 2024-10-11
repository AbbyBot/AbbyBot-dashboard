import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faServer, faList, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
export default function Dashboard() {
  const {user, loading} = useContext(AuthContext)

  const [activeButton, setActiveButton] = useState(null)
  const { pathname } = useLocation()
  const redirect = useNavigate()
  let sideBarButtons = [
    { id: 1, name: 'Dashboard', icon: faHome, onClick: () => handleOnClick(1, '/dashboard') },
    { id: 2, name: 'Manage Servers', icon: faServer, onClick: () => handleOnClick(2, '/dashboard/manage-servers') },
    { id: 3, name: 'Logs', icon: faList, onClick: () => handleOnClick(3, '/dashboard/logs') },
    { id: 4, name: 'My Profile', icon: faUser, onClick: () => handleOnClick(4, '/dashboard/profile') },
    { id: 5, name: 'Settings', icon: faGear, onClick: () => handleOnClick(5, '/dashboard/settings') },
  ]
  useEffect(() => {
   const paths = {
    '/dashboard': 1,
    '/dashboard/manage-servers': 2,
    '/dashboard/logs': 3,
    '/dashboard/profile': 4,
    '/dashboard/settings': 5
   }
   setActiveButton(paths[pathname] || 1)
  }, [pathname])
  const handleOnClick = (buttonID, redirectUrl) => {
    setActiveButton(buttonID)
    redirect(redirectUrl)
  }

  return <section className='content d-flex'>
    <aside className='bg-navbar d-flex flex-column gap-2 h-100 p-4' style={{ minWidth: 200, overflow: 'hidden' }}>
      {sideBarButtons.map((button, index) => {
        return <button key={`sidebar-button-${index}`} className={`w100 btn-link ${activeButton === button.id ? 'btn-link-selected' : ''}`} onClick={button.onClick}> <FontAwesomeIcon icon={button.icon} /> {button.name} </button>
      })}
    </aside>
    <aside className='content p-2' style={{ overflow: 'auto', height: 'calc(100vh - 64px)' }}>
      <Outlet />
    </aside>
  </section>
}
