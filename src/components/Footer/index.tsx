import { Link } from 'react-router';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer>
      <h1 className={styles.footer}>
        <Link to='/about'>Entenda como funciona a tecnica pomodoro 🍎</Link>
        <Link to='/'>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
        </Link>
      </h1>
    </footer>
  );
};
