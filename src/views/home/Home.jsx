import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Title from './components/Title/Title';
import Navbar from './components/navbar/Navbar';

export default function Home() {
  return (
    <Main>
      <Header>
        <Title />
      </Header>
      <main>
        <Navbar />
      </main>
    </Main>
  );
}
