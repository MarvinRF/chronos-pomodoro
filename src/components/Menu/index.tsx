import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

//Desestruturação direta na função: deixa mais limpo.
export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <a href=''>
        <h1 className={styles.menuLink}>
          <HouseIcon />
        </h1>
      </a>
      <a href=''>
        <h1 className={styles.menuLink}>
          <HistoryIcon />
        </h1>
      </a>
      <a href=''>
        <h1 className={styles.menuLink}>
          <SettingsIcon />
        </h1>
      </a>
      <a href=''>
        <h1 className={styles.menuLink}>
          <SunIcon />
        </h1>
      </a>
    </nav>
  );
};
