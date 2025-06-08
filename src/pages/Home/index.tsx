import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';

export const Home = () => {
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
