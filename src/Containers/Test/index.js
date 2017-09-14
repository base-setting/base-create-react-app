import React, { Component } from 'react';
import Resizable from 're-resizable';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

import './index.css';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: 0, y: 0
      }
    };

    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.adjustXPos = this.adjustXPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);

    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
  };

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  }

  onControlledDrag(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  }

  onControlledDragStop(e, position) {
    console.log()
    this.onControlledDrag(e, position);
    this.onStop();
  }

  render() {
    
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

    console.log('this.state.controlledPosition : ',this.state.controlledPosition);

    return (
      <div>
        <h1>Draggable</h1>

        <Draggable {...dragHandlers}>
          <div className="box">I can be dragged anywhere</div>
        </Draggable>

        <Draggable position={controlledPosition} {...dragHandlers} onStop={this.onControlledDragStop}>
          <div className="box">
            My position can be changed programmatically. <br />
            I have a dragStop handler to sync state.
            <p>
              <a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
            </p>
            <p>
              <a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
            </p>
          </div>
        </Draggable>

      </div>
    );
  }
};

export default Test;