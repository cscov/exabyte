import React from 'react';
import { Circle, Group } from 'react-konva';
import Konva from 'konva';

class OrangeAtoms extends React.Component {
  constructor(props) {
    super(props);
  }

  randomizePosition() {
    const pos = [];
    let x = Math.floor(Math.random() * 390);
    pos.push(x);
    let y = Math.floor(Math.random() * 500);
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
    return (<section>{group}</section>);
  }
}

export default OrangeAtoms;
