import { Pause, Play } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import DefaultInput from './components/DefaultInput';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action='' className='form'>
          <span className='formRow'>
            <DefaultInput
              labelText={'Nome da Tarefa:'}
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
            <DefaultButton icon={<Pause />} type={'button'} color='red' />
          </span>
        </form>
      </Container>
    </>
  );
};
