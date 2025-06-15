import { Hourglass } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

//Desestruturação direta na função: deixa mais limpo.
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink href='/' className={styles.logoLink}>
        <Hourglass />
        <span>Chronos Pomodoro</span>
      </RouterLink>
    </div>
  );
};
