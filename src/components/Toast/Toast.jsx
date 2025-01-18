import React, { useState, useEffect } from 'react';
import styles from './Toast.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Toast = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration - 1000); // Start hiding 1 second before the duration ends
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <div className={`${styles.toast} ${visible ? styles.show : styles.hide}`}>
      <div className={styles['toast-header']}>
        <span>AbbyBotDashboard</span>
        <button className={styles['toast-close']} onClick={() => setVisible(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {message}
    </div>
  );
};

export default Toast;
