import React, { Component } from 'react';
import './styles.css';

export default class ShowForm extends Component {
  state = {
    title: '',
    description: ''
  }

  componentDidMount() {
    let { title, description } = this.props.show;

    this.setState({ title, description });
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });

    this.onChange();
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });

    this.onChange();
  }

  onChange = () => {
    let { title, description } = this.state;

    this.props.onChange({ title, description });
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit();
  }

  isDisabled = () => {
    return this.state.title === '' || this.state.description === '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="flex flex-column create-show">
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
