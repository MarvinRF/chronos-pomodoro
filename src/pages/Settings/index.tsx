import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading';
import { GenericHtml } from '../../components/GenericHtml';
import DefaultInput from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';

export const Settings = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <GenericHtml>
          <p style={{ textAlign: 'center' }}>
            Modifique as Configurações para o tempo de foco, descanso curto e
            descanso longo
          </p>
        </GenericHtml>
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput id={'workTime'} placeholder={'Foco'} />
          </div>
          <div className='formRow'>
            <DefaultInput
              id={'shortBreakTime'}
              placeholder={'Descanso Curto'}
            />
          </div>
          <div className='formRow'>
            <DefaultInput id={'longBreakTime'} placeholder={'Descanso Longo'} />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              type={'button'}
              aria-label='salvar configurações'
              title='Salvar Configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};
