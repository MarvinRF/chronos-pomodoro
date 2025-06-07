import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

//Desestruturação direta na função: deixa mais limpo.
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
};
