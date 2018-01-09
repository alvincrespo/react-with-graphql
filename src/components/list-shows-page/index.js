import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.css';

class ListShowsPage extends Component {
  render() {
    if (this.props.allShowsQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading...
          </div>
        </div>
      );
    }

    return (
      <div>
        {this.props.allShowsQuery.allShows && this.props.allShowsQuery.allShows.map(show => (
          <div key={show.id}>
            <h3>{show.title}</h3>
            <p>{show.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

const ALL_SHOWS_QUERY = gql`
  query AllShowsQuery {
    allShows(orderBy: createdAt_DESC) {
      id
      title
      description
    }
  }
`;

const ListShowsPageWithQuery = graphql(ALL_SHOWS_QUERY, {
  name: 'allShowsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(ListShowsPage);

export default ListShowsPageWithQuery;
