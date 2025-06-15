import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    //lazy initialization do useState
    const storedTheme = localStorage.getItem('theme') as AvailableThemes;
    return storedTheme ?? 'dark';
  });
  const toggleTheme = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault(); //não segue o link
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // return () => {
    //   console.log('Componente desmontado, CLEAN UP');
    // };
  }, [theme]);
  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to='/'
        aria-label='Ir para a Home'
        title='Ir para a home'
      >
        <HouseIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </Link>
      <Link
        className={styles.menuLink}
        to='#'
        aria-label='Mudar Tema'
        title='Mudar Tema o'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Link>
    </nav>
  );
};
