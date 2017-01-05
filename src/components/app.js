import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div class="page-header">
          <h1>Simple Blog <small>it's very simple indeed</small></h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}
