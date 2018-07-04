import React from 'react';

class Atom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.atom.comment,
      latticeConstant:  this.props.atom.latticeConstant,
      firstLatticeVector: this.props.atom.firstLatticeVector,
      secondLatticeVector: this.props.atom.secondLatticeVector,
      thirdLatticeVector: this.props.atom.thirdLatticeVector,
      atomSpecies: this.props.atom.atomsPerSpecies,
      latticeType: this.props.atom.latticeType,
      atomCoordinates1: this.props.atom.atomCoordinates1,
      atomCoordinates2: this.props.atom.atomCoordinates2,
      latticeType2: this.props.atom.latticeType2,
      atomCoordinates3: this.props.atom.atomCoordinates3,
      atomCoordinates4: this.props.atom.atomCoordinates4,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const { atom } = this.props;
    let atomSpecies = atom.atomsPerSpecies.map( (species, idx) => {
      return (<li key={`species-${idx}`}>
          <input type="text" value={species} onChange={this.handleInputChange}/>
        </li>);
    });
    let firstLatticeVector = atom.firstLatticeVector.map( (vector, idx) => {
      return (<li key={`flv-${idx}`}>
          <input type="text" value={vector} onChange={this.handleInputChange}/>
        </li>);
    });
    let secondLatticeVector = atom.secondLatticeVector.map( (vector, idx) => {
      return (<li key={`fsv-${idx}`}>
          <input type="text" value={vector} onChange={this.handleInputChange}/>
        </li>);
    });
    let thirdLatticeVector = atom.thirdLatticeVector.map( (vector, idx) => {
      return (<li key={`ftv-${idx}`}>
          <input type="text" value={vector} onChange={this.handleInputChange}/>
        </li>);
    });

    let selectiveDynamics = atom.selectiveDynamics ? "Selective Dynamics" : "";
    let atomCoordinates1 = atom.atomCoordinates1.map((coords, idx) => {
      return (<li key={`ac1-${idx}`}>
          <input type="text" value={coords} onChange={this.handleInputChange}/>
        </li>);
    });
    let atomCoordinates2 = atom.atomCoordinates2.map((coords, idx) => {
      return (<li key={`ac2-${idx}`}>
          <input type="text" value={coords} onChange={this.handleInputChange}/>
        </li>);
    });
    let atomCoordinates3 = atom.atomCoordinates3.map((coords, idx) => {
      return (<li key={`ac3-${idx}`}>
          <input type="text" value={coords} onChange={this.handleInputChange}/>
        </li>);
    });
    let atomCoordinates4 = atom.atomCoordinates4.map((coords, idx) => {
      return (<li key={`ac4-${idx}`}>
          <input type="text" value={coords} onChange={this.handleInputChange}/>
        </li>);
    });

    return (
    <section>
      <li>
        <input type="text" value={atom.comment} onChange={this.handleInputChange}/>
      </li>
      <li>
        <input type="text" value={atom.latticeConstant} onChange={this.handleInputChange}/>
      </li>
      <ul className="array">{firstLatticeVector}</ul>
      <ul className="array">{secondLatticeVector}</ul>
      <ul className="array">{thirdLatticeVector}</ul>
      <ul className="array">{atomSpecies}</ul>
      <li>{selectiveDynamics}</li>
      <li>
        <input type="text" value={atom.latticeType} onChange={this.handleInputChange}/>
      </li>
      <ul className="array">{atomCoordinates1}</ul>
      <ul className="array">{atomCoordinates2}</ul>
      <li>{atom.latticeType2}</li>
      <ul className="array">{atomCoordinates3}</ul>
      <ul className="array">{atomCoordinates4}</ul>
    </section>);
  }
}

export default Atom;
