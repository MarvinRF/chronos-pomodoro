import { BookOpenCheck, LibraryBig, Pause } from 'lucide-react';
import styles from './styles.module.css';

export const Cycles = () => {
  return (
    <>
      <div className={styles.cycles}>
        <span>Ciclos:</span>

        <div className={styles.cyclesDots}>
          <div className={styles.workTime}>
            <Pause size={15} />
          </div>
          <div className={styles.shortBreakTime}>
            <LibraryBig size={15} />
          </div>
          <div className={styles.longBreakTime}>
            <BookOpenCheck size={15} />
          </div>
        </div>
      </div>
    </>
  );
};
