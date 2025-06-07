import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
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
          <div className='formRow'>
            <DefaultInput
              labelText={'Nome da Tarefa:'}
              id={'task'}
              type='text'
              placeholder={'Digite o nome da Tarefa'}
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
          </div>
          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button>enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
};
