import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Line, Arrow } from 'react-konva';
import Konva from 'konva';

class ArrowRect extends React.Component {
  constructor(props) {
    super(props) 
  };
  render() {
    return (
      <Arrow
        upstream={this.props.upstream}
        downstream={this.props.downstream}
        x={this.props.x}
        y={this.props.y}
        bezier={false}
	    points={this.props.points}
        strokeWidth={this.props.width}
	    fill={this.props.color}
	    stroke={this.props.color}
	    pointerLength={1}
	    pointerWidth={1}
        tension={.4}
        // lineCap={'round'}
      />
    );
  }
}

export default ArrowRect
