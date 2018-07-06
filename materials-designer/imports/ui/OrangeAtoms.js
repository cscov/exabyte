import React from 'react';
import { Circle, Group } from 'react-konva';
import Konva from 'konva';

class OrangeAtoms extends React.Component {
  constructor(props) {
    super(props);
  }

  randomizePosition(stage) {
    const pos = [];
    let x = Math.floor(Math.random() * Math.floor(this.props.stage.width));
    pos.push(x);
    let y = Math.floor(Math.random() * Math.floor(this.props.stage.height));
    pos.push(y);
    return pos;
  }

  render() {
    const group = new Konva.Group({
      x: 0,
      y: 0
    });
    for (let i = 0; i < 3; i++) {
      group.add(
        <Circle
          x={this.randomizePosition(this.props.stage)[0]}
          y={this.randomizePosition(this.props.stage)[1]}
          radius={10}
          fill="#EE6352"/>
       );
    }
    return group;
  }
}

export default OrangeAtoms;
