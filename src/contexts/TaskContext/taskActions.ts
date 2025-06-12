// UseReducer -> Hook do React que recebe um reducer e um edtado inicial
// reducer => função que recebe o estado atual e uma ação
// state => o estado atual
// action => a ação disparada, geralmente é um objeto com type e opcionalmente payload
// type => o tipo da ação, geralmente uma string (pode ser um enum, constante, etc)
// payload => os dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';

export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
  MARK_CURRENT_TASK_AS_FINISHED: 'MARK_CURRENT_TASK_AS_FINISHED',
  SET_SECONDS_REMAINING: 'SET_SECONDS_REMAINING',
};

export type TaskActionModel =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.RESET_STATE;
    };
