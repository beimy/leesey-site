import React, {useState, useEffect} from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { SiteProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Nav from './components/Nav/index.tsx';
import RecipePage from './pages/Recipes.tsx';
import SubmissionPage from './pages/Submissions.tsx';
import EncycloPage from './pages/Encyclo.tsx';
import ReferencesPage from './pages/References.tsx';
import TestPage from './pages/TestPage.tsx';

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
    document.title = 'Foraging Friend'
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <SiteProvider>
            <Nav />
            <Routes>
              <Route 
                path='/foraging-site'
                element={<Home />}
              />
              <Route 
                path='/cocktails'
                element={<RecipePage />}
              />
              <Route 
                path='/submit'
                element={<SubmissionPage />}
              />
              <Route 
                path='/encyclopedia'
                element={<EncycloPage />}
              />
              <Route 
                path='/references'
                element={<ReferencesPage />}
              />
               <Route 
                path='/test'
                element={<TestPage />}
              />
            </Routes>
          </SiteProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
