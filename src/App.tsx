import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
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
            <label htmlFor='input'>
              <span>task</span>
              <input id='input' type='text' />
            </label>
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
