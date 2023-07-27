import Card from '../../components/card/Card';
import { GridContainer, Main } from '../../components/elements';
import Header from '../../components/header/Header';
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
