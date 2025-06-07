import type { ReactNode } from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
  children: ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <div>
      <h1 className={styles.heading}>{children}</h1>
    </div>
  );
};
