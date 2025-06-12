import { Pause, Play } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import DefaultInput from '../DefaultInput';
import type React from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import Tips from '../Tips';

export const MainForm = () => {
  const { state, dispatch } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskNameRef.current?.value === null) return;

    const taskName = taskNameRef.current?.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  };

  const handleInterruptTask = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  };

  return (
    <div>
      <form onSubmit={handleCreateNewTask} action='' className='form'>
        <span className='formRow'>
          <DefaultInput
            labelText={`Nome da Tarefa:`}
            id={'task'}
            type='text'
            placeholder={'Digite o nome da Tarefa'}
            ref={taskNameRef}
            disabled={!!state.activeTask}
          />
        </span>
        <span className='formRow'>
          <Tips nextCycleType={nextCycleType} />
        </span>

        {state.currentCycle > 0 && (
          <span className='formRow'>
            <Cycles />
          </span>
        )}

        <span className='formRow'>
          {!state.activeTask && (
            <DefaultButton
              aria-label='Iniciar nova Tarefa'
              title='Iniciar nova Tarefa'
              icon={<Play />}
              type={'submit'}
            />
          )}
          {!!state.activeTask && (
            <DefaultButton
              aria-label='Interromper tarefa'
              title='Interromper tarefa'
              icon={<Pause />}
              type={'button'}
              color='red'
              onClick={handleInterruptTask}
            />
          )}
        </span>
      </form>
    </div>
  );
};
