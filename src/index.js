import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ListShowsPage from './components/list-shows-page';
import CreateShowPage from './components/create-show-page';
import ShowDetailPage from './components/show-detail-page';
import 'tachyons';
import './index.css';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_SIMPLE_API_URL });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div className="flex flex-column">
        <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <h1 className="f1 lh-title">My GraphQL Example</h1>
          <nav className="f6 fw6 ttu tracked">
            <NavLink to="/" className="link dim white dib mr3">Home</NavLink>
          </nav>
        </header>
        <main className="ph5 pt4">
          <Route exact path="/" component={ListShowsPage} />
          <Route path="/create" component={CreateShowPage} />
          <Route path="/show/:id" render={(props) => <ShowDetailPage {...props} />} />
        </main>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
