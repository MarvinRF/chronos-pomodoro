import type { TaskStateModel } from '../models/TaskStateModel';
import {
  TaskActionTypes,
  type TaskActionModel,
} from './TaskContext/taskActions';

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }
  //Seu reducer sempre deve retornar o estado
  return state;
}
