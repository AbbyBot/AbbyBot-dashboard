import React from 'react';
import { useLoading } from '../context/LoadingContext';
import styles from './Init.module.css';

export default function Init() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <main className={styles.main}>
      <div className={styles.spinner}></div>
    </main>
  );
}
