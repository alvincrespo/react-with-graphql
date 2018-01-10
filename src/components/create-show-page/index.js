import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

  isDisabled = () => {
    return this.state.title === '' || this.state.description === '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flex flex-column create-show">
        <h2>Create Show</h2>
        <div className="flex flex-column pb2">
          <label className="pb1">Title</label>
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="pa2" />
        </div>
        <div className="flex flex-column pb4">
          <label className="pb1">Description</label>
          <textarea value={this.state.description} onChange={this.handleDescriptionChange} className="pa2"></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pa2" disabled={this.isDisabled()}>
            Create Show
          </button>
        </div>
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

export default withRouter(CreateShowPageWithMutation);
