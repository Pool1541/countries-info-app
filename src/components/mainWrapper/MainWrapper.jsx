import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../../assets/globalStyles';
import SidebarContextProvider from '../../context/SidebarContext';
import CountriesContextProvider from '../../context/CountriesContext';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <CountriesContextProvider>
            <SidebarContextProvider>
              <ModalContextProvider>
                {children}
                <GlobalStyle />
              </ModalContextProvider>
            </SidebarContextProvider>
          </CountriesContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  );
}
