import React, { Component } from 'react';

export default class File extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}
