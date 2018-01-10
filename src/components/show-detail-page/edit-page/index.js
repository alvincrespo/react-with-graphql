import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ShowForm from '../../show-form';
import './styles.css';

class EditPage extends Component {
  state = {
    title: '',
    description: ''
  }

  onChange = ({ title, description }) => {
    this.setState({ title, description });
  }

  render() {
    let { Show: show } = this.props.showDetailQuery;

    return (
      <div className="show-edit-page">
        <header className="flex justify-between items-center">
          <h2>Show / {show.title} / Edit</h2>
        </header>
        <ShowForm show={show} onChange={this.onChange} />;
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

const EditPageWithQuery = graphql(SHOW_QUERY, {
  name: 'showDetailQuery',
  options: ({ match }) => ({
    variables: {
      id: match.params.id
    }
  })
})(EditPage);

export default EditPageWithQuery;
