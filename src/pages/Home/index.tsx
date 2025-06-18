import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    document.title = 'Chronos Pomodoro - Home';
  }, []);
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};
