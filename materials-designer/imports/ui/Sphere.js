import React from 'react';

class Sphere extends React.Component {
  constructor(props) {
    super(props);
    this.state = { radius: 10 };
  }

  drawAtom() {
    const { ctx, canvas, hexCode, x, y } = this.props;
    ctx.beginPath();
    ctx.arc(x, y, this.state.radius, 0, Math.PI * 2);
    ctx.fillStyle = hexCode;
    ctx.fill();
    ctx.closePath();
  }

  render() {
    return (<section>{this.drawAtom()}</section>);
  }
}

export default Sphere;
