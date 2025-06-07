import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode; //ReactNode: aceita qualquer coisa que possa ser renderizada no React (string, number, JSX, fragmentos, arrays etc).
};

//Desestruturação direta na função: deixa mais limpo.
export const Heading = ({ children }: HeadingProps) => {
  return (
    <div>
      <h1 className={styles.heading}>{children}</h1>
    </div>
  );
};
