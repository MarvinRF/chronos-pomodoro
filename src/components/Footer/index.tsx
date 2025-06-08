import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer>
      <h1 className={styles.footer}>
        <a href='#'>Entenda como funciona a tecnica pomodoro 🍎</a>
        <a href='#'>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
        </a>
      </h1>
    </footer>
  );
};
