import styles from './Container.module.css';

import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
};

export default Container;
