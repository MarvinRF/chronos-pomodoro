import React, { useReducer } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = React.useState<TaskStateModel>(initialTaskState);

  const [numero, dispatch] = useReducer((state, action) => {
    console.log('action:', action);
    console.log('state', state);

    switch (action) {
      case 'Increment':
        return state + 1;
      case 'Decrement':
        return state - 1;
      case 'Double':
        return state * 2;
      case 'Reset':
        return state - state;
      default:
        return state;
    }

    return state;
  }, 0);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>O numero é: {numero}</h1>
      <button
        onClick={() => {
          dispatch('Increment');
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch('Decrement');
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch('Double');
        }}
      >
        Double
      </button>
      <button
        onClick={() => {
          dispatch('Reset');
        }}
      >
        Reset
      </button>
    </TaskContext.Provider>
  );
}
