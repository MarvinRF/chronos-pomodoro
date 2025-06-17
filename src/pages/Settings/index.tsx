import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading';
import { GenericHtml } from '../../components/GenericHtml';
import DefaultInput from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';

export const Settings = () => {
  const { state } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakInputRef = useRef<HTMLInputElement>(null);
  const longBreakInputRef = useRef<HTMLInputElement>(null);
  const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showMessage.dismiss();
    console.log('salvando configurações');

    const formErrors = [];

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreak = Number(shortBreakInputRef.current?.value);
    const longBreak = Number(longBreakInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreak) || isNaN(longBreak)) {
      formErrors.push('Por favor utilizar apenas numeros para todos os campos');
    }
    if (workTime < 1 || workTime > 99) {
      formErrors.push('Por favor utilizar valores entre 1 e 99 para foco');
    }
    if (shortBreak < 5 || shortBreak > 30) {
      formErrors.push(
        'Por favor utilizar valores entre 5 e 30 para descanso curto',
      );
    }
    if (longBreak < 5 || longBreak > 60) {
      formErrors.push(
        'Por favor utilizar valores entre 5 e 60 para descanso longo',
      );
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
    }
    console.log('configurações salvas');
  };

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
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id={'workTime'}
              placeholder={'Foco'}
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id={'shortBreakTime'}
              placeholder={'Descanso Curto'}
              ref={shortBreakInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id={'longBreakTime'}
              placeholder={'Descanso Longo'}
              ref={longBreakInputRef}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              type={'submit'}
              aria-label='salvar configurações'
              title='Salvar Configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};
