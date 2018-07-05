import React from 'react';
import { Atoms } from '../api/atoms.js';

class Atom extends React.Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(property) {
    return e => Atoms.update(this.props.atom._id, {
      $set: { [property]: e.target.value }
    });
  }

  render() {
    const { atom } = this.props;
    console.log(atom);

    let selectiveDynamics = atom.selectiveDynamics ? "Selective Dynamics" : "";

    return (
    <section className="atoms">
      <li>
        <input  className="text" type="text" value={atom.comment} onChange={this.handleInputChange('comment')}/>
      </li>
      <li>
        <input className="constant" type="text" value={atom.latticeConstant} onChange={this.handleInputChange('latticeConstant')}/>
      </li>
      <section className="array">
        <li className="vector"><input type="text" value={atom.firstVector0} onChange={this.handleInputChange('firstVector0')}/></li>
        <li className="vector"><input type="text" value={atom.firstVector1} onChange={this.handleInputChange('firstVector1')}/></li>
        <li className="vector"><input type="text" value={atom.firstVector2} onChange={this.handleInputChange('firstVector2')}/></li>
      </section>
      <section className="array">
        <li className="vector"><input type="text" value={atom.secondVector0} onChange={this.handleInputChange('secondVector0')}/></li>
        <li className="vector"><input type="text" value={atom.secondVector1} onChange={this.handleInputChange('secondVector1')}/></li>
        <li className="vector"><input type="text" value={atom.secondVector2} onChange={this.handleInputChange('secondVector2')}/></li>
      </section>
      <section className="array">
        <li className="vector"><input type="text" value={atom.thirdVector0} onChange={this.handleInputChange('thirdVector0')}/></li>
        <li className="vector"><input type="text" value={atom.thirdVector1} onChange={this.handleInputChange('thirdVector1')}/></li>
        <li className="vector"><input type="text" value={atom.thirdVector2} onChange={this.handleInputChange('thirdVector2')}/></li>
      </section>
      <section className="array">
        <li className="constant"><input type="text" value={atom.atomSpecies0} onChange={this.handleInputChange('atomSpecies0')}/></li>
        <li className="constant"><input type="text" value={atom.atomSpecies1} onChange={this.handleInputChange('atomSpecies1')}/></li>
      </section>
      <li className="text">{selectiveDynamics}</li>
      <li>
        <input className="text" type="text" value={atom.latticeType} onChange={this.handleInputChange('latticeType')}/>
      </li>
      <section className="array">
        <li className="coords"><input type="text" value={atom.atomCoord10} onChange={this.handleInputChange('atomCoord10')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord11} onChange={this.handleInputChange('atomCoord11')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord12} onChange={this.handleInputChange('atomCoord12')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord13} onChange={this.handleInputChange('atomCoord13')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord14} onChange={this.handleInputChange('atomCoord14')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord15} onChange={this.handleInputChange('atomCoord15')}/></li>
      </section>
      <section className="array">
        <li className="coords"><input type="text" value={atom.atomCoord20} onChange={this.handleInputChange('atomCoord20')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord21} onChange={this.handleInputChange('atomCoord21')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord22} onChange={this.handleInputChange('atomCoord22')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord23} onChange={this.handleInputChange('atomCoord23')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord24} onChange={this.handleInputChange('atomCoord24')}/></li>
        <li className="coords"><input type="text" value={atom.atomCoord25} onChange={this.handleInputChange('atomCoord25')}/></li>
      </section>
      <li className="divider">
      <input className="text" type="text" value={atom.latticeType2} onChange={this.handleInputChange('latticeType2')} />
      </li>
      <section className="array">
        <li className="coords"><input  type="text" value={atom.atomCoord30} onChange={this.handleInputChange('atomCoord30')}/></li>
        <li className="coords"><input  type="text" value={atom.atomCoord31} onChange={this.handleInputChange('atomCoord31')}/></li>
        <li className="coords"><input  type="text" value={atom.atomCoord32} onChange={this.handleInputChange('atomCoord32')}/></li>
      </section>
      <section className="array">
        <li className="coords"><input  type="text" value={atom.atomCoord40} onChange={this.handleInputChange('atomCoord40')}/></li>
        <li className="coords"><input  type="text" value={atom.atomCoord41} onChange={this.handleInputChange('atomCoord41')}/></li>
        <li className="coords"><input  type="text" value={atom.atomCoord42} onChange={this.handleInputChange('atomCoord42')}/></li>
      </section>

    </section>);
  }
}

export default Atom;
