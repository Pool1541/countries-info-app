import Card from '../../components/card/Card';
import { GridContainer } from '../../components/elements';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import SearchBar from './components/searchBar/SearchBar';

export default function Countries() {
  return (
    <Main>
      <Header>
        <SearchBar />
      </Header>
      <GridContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridContainer>
    </Main>
  );
}
