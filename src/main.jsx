import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainWrapper from './components/mainWrapper/MainWrapper';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://countries.trevorblades.com/' }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <MainWrapper>
      <App />
    </MainWrapper>
  </ApolloProvider>,
);
