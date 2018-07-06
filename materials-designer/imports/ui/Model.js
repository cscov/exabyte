import React, { Component } from 'react';
import OrangeAtoms from './OrangeAtoms.js';
import { Stage, Layer, Circle, Group } from 'react-konva';
import Konva from 'konva';

export default class Model extends Component {
  constructor() {
    super();
    this.state = { colors: ['#EE6352', '#08B2E3', '#57A773'] };
    this.draw = this.draw.bind(this);
    this.stageRef = React.createRef();
    this.state = { stage: this.stageRef.current };
    // debugger
  }

  componentDidMount() {
    // const stage = this.refs.stage;

  }

  // randomizeColor() {
  //   return Math.floor(Math.random() * 3) + 1;
  // }

  // drawAtoms(ctx, canvas, hexCode) {
  //   const atoms = [];
  //   for (let i = 0; i < 3; i++) {
  //     atoms.push(<li><Sphere ctx={ctx}
  //                            canvas={canvas}
  //                            hexCode={this.state.colors[0]}
  //                            x={this.randomizePosition()[0]}
  //                            y={this.randomizePosition()[1]}/></li>);
  //   }
  //   for (let i = 0; i < 9; i++) {
  //     this.drawAtom(ctx, canvas, this.state.colors[1]);
  //   }
  //   for (let i = 0; i < 12; i++) {
  //     this.drawAtom(ctx, canvas, this.state.colors[2]);
  //   }
  // }

  draw() {
  }

  render() {
    return (
      <Stage ref="stage" width="390" height="500">
        <Layer>
          <OrangeAtoms stage={this.state.stage}/>
        </Layer>
      </ Stage>
    );
  }
}
