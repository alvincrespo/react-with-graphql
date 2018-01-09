import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.css';

class CreateShowPage extends Component {
  state = {
    title: '',
    description: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { title, description } = this.state;
    await this.props.createShowMutation({ variables: { title, description }});
    this.props.history.replace('/');
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        </div>
        <button type="submit">Create Show</button>
      </form>
    );
  }
}

const CREATE_SHOW_MUTATION = gql`
  mutation CreateShowMutation($title: String!, $description: String!) {
    createShow(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

const CreateShowPageWithMutation = graphql(CREATE_SHOW_MUTATION, {
  name: 'createShowMutation'
})(CreateShowPage);

export default withRouter(CreateShowPageWithMutation)
