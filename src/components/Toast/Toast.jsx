import React, { useState, useEffect } from 'react';
import styles from './Toast.module.scss';

const Toast = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <div className={`${styles.toast} ${visible ? styles.show : styles.hide}`}>
      {message}
    </div>
  );
};

export default Toast;
