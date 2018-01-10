import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import './styles.css';

class ShowDetailPage extends Component {
  render() {
    if (this.props.showDetailQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading...
          </div>
        </div>
      );
    }

    let { Show: show } = this.props.showDetailQuery;

    return (
      <div className="show-detail-page">
        <header className="flex justify-between items-center">
          <h2>Show / {show.title}</h2>
          <nav className="flex justify-between actions items-center">
            <Link to={`/show/${show.id}/edit`}>Edit</Link>
            <button className="f6 link dim ph3 pv2 mb2 dib white pa2">
              Delete
            </button>
          </nav>
        </header>
        <h3>Description</h3>
        <p>{show.description}</p>
      </div>
    );
  }
}

const SHOW_QUERY = gql`
  query ShowQuery($id: ID!) {
    Show(id: $id) {
      id
      title
      description
    }
  }
`;

const ShowDetailPageWithQuery = graphql(SHOW_QUERY, {
  name: 'showDetailQuery',
  options: ({ match }) => ({
    variables: {
      id: match.params.id
    }
  })
})(ShowDetailPage);

export default ShowDetailPageWithQuery;
