import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ListShowsPage from './components/list-shows-page';
import CreateShowPage from './components/create-show-page';
import logo from './logo.svg';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_SIMPLE_API_URL });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">My GraphQL Example</h1>
        </header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Create">Create Show</NavLink>
        </nav>
        <div className="app-intro">
          <Route exact path="/" component={ListShowsPage} />
          <Route path="/create" component={CreateShowPage} />
        </div>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
