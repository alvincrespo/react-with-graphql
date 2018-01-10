import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Route } from 'react-router-dom';
import DetailPage from './detail-page';
import EditPage from './edit-page';
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

    return (
      <div>
        <Route exact path={`${this.props.match.path}`} render={() => <DetailPage {...this.props} />} />
        <Route path={`${this.props.match.path}/edit`} component={EditPage} />
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
