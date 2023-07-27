import Card from '../../components/card/Card';
import { Main } from '../../components/elements/Main';
import Header from '../../components/header/Header';
import SearchBar from './components/searchBar/SearchBar';

export default function Countries() {
  return (
    <Main>
      <Header>
        <SearchBar />
      </Header>
      <div>
        <Card />
      </div>
    </Main>
  );
}
