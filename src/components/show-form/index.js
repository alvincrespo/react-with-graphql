import React, { Component } from 'react';
import './styles.css';

export default class ShowForm extends Component {
  state = {
    title: '',
    description: ''
  }

  componentDidMount() {
    let { show } = this.props;

    if (show) {
      let { title, description } = show;

      this.setState({ title, description });
    }
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

  children = {
    header: (props) => <h3>{props.children}</h3>,
    title: () => {
      let { title } = this.state;

      return (
        <div className="flex flex-column pb2">
          <label className="pb1">Title</label>
          <input type="text" value={title} onChange={this.handleTitleChange} className="pa2" />
        </div>
      );
    },
    description: () => {
      let { description } = this.state;

      return (
        <div className="flex flex-column pb4">
          <label className="pb1">Description</label>
          <textarea value={description} onChange={this.handleDescriptionChange} className="pa2"></textarea>
        </div>
      );
    },
    actions: (props) => {
      let children = {
        save: (props) => {
          return (
            <button type="submit" className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pa2" disabled={this.isDisabled()}>
              {props.children}
            </button>
          );
        }
      };

      return (
        <div className="flex justify-end">
          {props.children(children)}
        </div>
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="flex flex-column create-show">
        {this.props.children(this.children)}
      </form>
    );
  }
}
