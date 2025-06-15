import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export const Footer = () => {
  return (
    <footer>
      <h1 className={styles.footer}>
        <RouterLink href='/about'>
          Entenda como funciona a tecnica pomodoro 🍎
        </RouterLink>
        <RouterLink href='/'>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
        </RouterLink>
      </h1>
    </footer>
  );
};
