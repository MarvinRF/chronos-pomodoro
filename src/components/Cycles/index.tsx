import { Coffee, NotebookPen, PartyPopper } from 'lucide-react';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export const Cycles = () => {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  return (
    <>
      <div className={styles.cycles}>
        <span>Ciclos:</span>
        <div className={styles.cyclesDots}>
          {cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index);
            const nextCycleType = getNextCycleType(nextCycle);

            switch (nextCycleType) {
              case 'workTime':
                return (
                  <div
                    key={index}
                    className={styles.workTime}
                    aria-label='indicador, ciclo de foco'
                    title='indicador, ciclo de foco'
                  >
                    <NotebookPen size={15} />
                  </div>
                );
              case 'shortBreakTime':
                return (
                  <div
                    key={index}
                    className={styles.shortBreakTime}
                    aria-label='indicador, ciclo de descanso curto'
                    title='indicador, ciclo de descanso curto'
                  >
                    <Coffee size={15} />
                  </div>
                );
              case 'longBreakTime':
                return (
                  <div
                    key={index}
                    className={styles.longBreakTime}
                    aria-label='indicador, ciclo de descanso longo'
                    title='indicador, ciclo de descanso longo'
                  >
                    <PartyPopper size={15} />
                  </div>
                );
              default:
                return null; // fallback
            }
          })}
        </div>
      </div>
    </>
  );
};
