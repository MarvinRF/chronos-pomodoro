import { Play } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import DefaultInput from '../DefaultInput';
import type React from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export const MainForm = () => {
  const { state, setState } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);

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

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTaskId: newTask,
      currentCycle: nextCycle,
      secondsRemaining,
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prevState.tasks, newTask],
    }));
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
          />
        </span>
        <span className='formRow'>
          <p>Lorem ipsum dolor sit, amet consectetur.</p>
        </span>

        {state.currentCycle > 0 && (
          <span className='formRow'>
            <Cycles />
          </span>
        )}

        <span className='formRow'>
          <DefaultButton icon={<Play />} type={'submit'} />
          {/* <DefaultButton icon={<Pause />} type={'button'} color='red' /> */}
        </span>
      </form>
    </div>
  );
};
