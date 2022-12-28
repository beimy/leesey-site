import React, {useState, useEffect} from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { SiteProvider } from './utils/GlobalState';

import Nav from './components/Nav/index.tsx';
import PaintingsPage from './pages/Paintings';
import DrawingsPage from './pages/Drawings';
import InfoPage from './pages/Info';
import CV from './pages/CV';

import ErrorModal from './components/ErrorModal/index.tsx';
import ScrollToTop from './components/ScrollToTop';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  useEffect(() => {
    document.title = 'leesey'
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <SiteProvider>
            <Nav />
            <ErrorModal></ErrorModal>
            <ScrollToTop>
              <Routes>
                <Route 
                  path='/paintings'
                  element={<PaintingsPage />}
                  />
                  <Route 
                  path='/drawings'
                  element={<DrawingsPage />}
                  />
                  <Route 
                  path='/lowdown'
                  element={<InfoPage />}
                  />
                  <Route 
                  path='/CV'
                  element={<CV />}
                  />
              </Routes>
            </ScrollToTop>
          </SiteProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
