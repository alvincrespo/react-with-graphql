import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ShowForm from '../show-form';
import './styles.css';

class CreateShowPage extends Component {
  state = {
    title: '',
    description: ''
  }

  onChange = ({ title, description }) => {
    this.setState({ title, description });
  }

  onSubmit = async () => {
    const { title, description } = this.state;
    await this.props.createShowMutation({ variables: { title, description }});
    this.props.history.replace('/');
  }

  render() {
    return <ShowForm onChange={this.onChange} onSubmit={this.onSubmit} />;
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
