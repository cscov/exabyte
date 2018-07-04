import React, { Component } from 'react';

class Toolbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="toolbar">
        <section className="left-toolbar">
          <h2>Material Name</h2>
          <h4>Material Type</h4>
        </section>
        <section className="right-toolbar">
          <button>Save Material</button>
        </section>
      </section>
    );
  }
}

export default Toolbar;
