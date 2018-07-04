import React from 'react';

class FileSelector extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="select">
        <select id="file-type">
          <option defaultValue="poscar" value="poscar">POSCAR</option>
          <option value="xyz">XYZ</option>
        </select>
        <select id="structure">
          <option defaultValue="crystal" value="crystal">Crystal Basis</option>
        </select>
      </section>
    );
  }
}

export default FileSelector;
