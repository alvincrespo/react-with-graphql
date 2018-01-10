import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DetailPage extends Component {
  render() {
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
