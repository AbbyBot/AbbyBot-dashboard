import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faServer, faList, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useLoading } from '../../context/LoadingContext';
import Init from '../../components/Init';

export default function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  const { setIsLoading } = useLoading();
  const [showLoading, setShowLoading] = useState(true); // Show loading screen
  const redirect = useNavigate();

  const [activeButton, setActiveButton] = useState(1);
  const { pathname } = useLocation();
  let sideBarButtons = [
    { id: 1, name: 'Dashboard', icon: faHome, onClick: () => handleOnClick(1, '/dashboard') },
    { id: 2, name: 'Manage Guilds', icon: faServer, onClick: () => handleOnClick(2, '/dashboard/manage-servers') },
    { id: 4, name: 'My Profile', icon: faUser, onClick: () => handleOnClick(4, '/dashboard/profile') },
  ];

  let paths = {
    '/dashboard': 1,
    '/dashboard/manage-servers': 2,
    '/dashboard/profile': 4,
    '/dashboard/settings': 5
  };

  useEffect(() => {
    setActiveButton(paths[pathname]);
  }, [pathname]);

  const handleOnClick = (buttonID, redirectUrl) => {
    if (redirectUrl === pathname) {
      
      
    }
    redirect(redirectUrl);
    setActiveButton(buttonID);
  };

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === images.length) {
        setIsLoading(false);
      }
    };

    images.forEach(image => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener('load', handleImageLoad);
        image.addEventListener('error', handleImageLoad);
      }
    });

    return () => {
      images.forEach(image => {
        image.removeEventListener('load', handleImageLoad);
        image.removeEventListener('error', handleImageLoad);
      });
    };
  }, [setIsLoading]);

  useEffect(() => {
    if (!user && !loading) {
      setTimeout(() => {
        window.location.href = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=YOUR_PERMISSIONS';
      }, 3000); // Wait 3 seconds before redirecting to the Discord OAuth2 URL
    } else {
      setShowLoading(false); // Ocultar la pantalla de carga si el usuario está logue ado
    }
  }, [user, loading]);

  if (showLoading) {
    return <Init />; // Show loading screen
  }

  return (
    <section className='content d-flex'>
      <aside className='bg-navbar d-flex flex-column gap-2 h-100 p-4' style={{ minWidth: 200, overflow: 'hidden' }}>
        {sideBarButtons.map((button, index) => {
          return (
            <button
              key={`sidebar-button-${index}`}
              className={`w100 btn-link ${activeButton === button.id ? 'btn-link-selected' : ''}`}
              onClick={button.onClick}
            >
              <FontAwesomeIcon icon={button.icon} /> {button.name}
            </button>
          );
        })}
      </aside>
      <aside className='content p-2' style={{ overflow: 'auto', height: 'calc(100vh - 64px)' }}>
        <Outlet />
      </aside>
    </section>
  );
}