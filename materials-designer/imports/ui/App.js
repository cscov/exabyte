import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import File from './File.js';

// App component - represents the whole app
export default class App extends Component {



  render() {
    return (
      <React.Fragment>
        <section className="container">
          <header>
            <h1>Materials Designer</h1>
          </header>
          <section className="content">
            <Toolbar />
            <section className="file-area"></section>
            <section className="model-area"></section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
