import React from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

type CycleType = Exclude<keyof TaskStateModel['config'], 'cycles'>;
type TipsProps = {
  nextCycleType: 'workTime' | 'shortBreakTime' | 'longBreakTime' | 'cycles';
};
export default function Tips({ nextCycleType }: TipsProps) {
  const { state } = useTaskContext();

  //tips
  const tipsForWhenActiveTask: Record<CycleType, React.ReactNode> = {
    workTime: <span>Foque por: {state.config.workTime} min.</span>,
    shortBreakTime: (
      <span>Descanso curto por: {state.config.shortBreakTime} min.</span>
    ),
    longBreakTime: (
      <span>Descanso Longo por: {state.config.longBreakTime} min.</span>
    ),
  };

  //tips
  const tipsForNoActiveTask: Record<CycleType, React.ReactNode> = {
    workTime: <span>Próximo ciclo é de: {state.config.workTime} min.</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de: {state.config.shortBreakTime} min.</span>
    ),
    longBreakTime: (
      <span>Próximo ciclo é de: {state.config.longBreakTime} min.</span>
    ),
  };

  return (
    <>
      {!!state.activeTask &&
        tipsForWhenActiveTask[state.activeTask.type as CycleType]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType as CycleType]}
    </>
  );
}
