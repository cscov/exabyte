import React, { Component } from 'react';

import File from './File.js';

// App component - represents the whole app
export default class App extends Component {



  render() {
    return (
      <section className="container">
        <header>
          <h1>Materials Designer</h1>
        </header>
        <section className="content">
          <section className="file-area"></section>
          <section className="model-area"></section>
        </section>
      </section>
    );
  }
}
