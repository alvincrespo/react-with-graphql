import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
      <div>
        <header className="flex justify-between items-center">
          <h2>Show / {show.title}</h2>
        </header>
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
