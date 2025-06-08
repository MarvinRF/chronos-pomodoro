import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; //vai de 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
    cycles: number;
  };
};
