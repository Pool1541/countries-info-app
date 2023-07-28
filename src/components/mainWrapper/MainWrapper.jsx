import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../../assets/globalStyles';
import SidebarContextProvider from '../../context/SidebarContext';
import CountriesContextProvider from '../../context/CountriesContext';
import { HashRouter } from 'react-router-dom';
import ModalContextProvider from '../../context/ModalContext';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://countries.trevorblades.com/' }),
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      cacheTime: 1000 * 60 * 60,
    },
  },
});

export default function MainWrapper({ children }) {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <CountriesContextProvider>
            <SidebarContextProvider>
              <ModalContextProvider>
                {children}
                <GlobalStyle />
              </ModalContextProvider>
            </SidebarContextProvider>
          </CountriesContextProvider>
        </HashRouter>
      </QueryClientProvider>
    </ApolloProvider>
  );
}
