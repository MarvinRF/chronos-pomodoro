import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chegar ao final
  interruptedDate: number | null; //quando a pessoa interromper a task
  type: keyof TaskStateModel['config'];
};
