import styles from './styles.module.css';

import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

//Desestruturação direta na função: deixa mais limpo.
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
};
