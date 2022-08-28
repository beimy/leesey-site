import React, {useState} from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { SiteProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Nav from './components/Nav/index.tsx';

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className=''>
          <SiteProvider>
            <Nav />
            <Routes>
              <Route 
                path='/'
                element={<Home />}
              />
            </Routes>
          </SiteProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
