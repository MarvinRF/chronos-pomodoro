import { Play } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import DefaultInput from '../DefaultInput';

export const MainForm = () => {
  return (
    <div>
      <form action='' className='form'>
        <span className='formRow'>
          <DefaultInput
            labelText={`Nome da Tarefa:`}
            id={'task'}
            type='text'
            placeholder={'Digite o nome da Tarefa'}
          />
        </span>
        <span className='formRow'>
          <p>Lorem ipsum dolor sit, amet consectetur.</p>
        </span>
        <span className='formRow'>
          <Cycles />
        </span>
        <span className='formRow'>
          <DefaultButton icon={<Play />} type={'button'} />
          {/* <DefaultButton icon={<Pause />} type={'button'} color='red' /> */}
        </span>
      </form>
    </div>
  );
};
