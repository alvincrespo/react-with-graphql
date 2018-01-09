import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { NavLink } from 'react-router-dom';
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
        <header className="flex justify-between items-center">
          <h2>Shows</h2>
          <NavLink to="/create" className="link dim black dib mr3">
            &#43; Create Show
          </NavLink>
        </header>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">Title</th>
              <th className="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.allShowsQuery.allShows && this.props.allShowsQuery.allShows.map(show => (
              <tr className="text-left" key={show.id}>
                <td>{show.title}</td>
                <td>{show.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
