import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import Model from './Model.js';
import FileSelector from './FileSelector.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Atoms } from '../api/atoms.js';
import Atom from './Atom.js';

// App component - represents the whole app
 class App extends Component {
   constructor(props) {
     super(props);
   }

   renderAtoms() {
     return this.props.atoms.map( (atom, id) => (
       <li key={id}><Atom atom={atom} /></li>
     ));
   }

  render() {
    return (
      <React.Fragment>
        <section className="container">
          <header>
            <h1>Materials Designer</h1>
          </header>
          <section className="content">
            <Toolbar />
            <section className="file-area">
              <FileSelector />
              <ul>{this.renderAtoms()}</ul>
            </section>
            <section className="model-area"></section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default withTracker(() => {
  return {
    atoms: Atoms.find({}).fetch(),
  };
})(App);
