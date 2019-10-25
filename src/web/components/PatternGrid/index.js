import React, { Component } from "react";
import { PatternGridStyle } from "../PatternGrid/style";

class PatternGrid extends Component {
  gridCount = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  render() {
    const { onDragStart, onMouseEnter, onDragOver, onDrop } = this.props;
    return (
      <PatternGridStyle>
        <div className="grid">
          {this.gridCount.map((grid, index) => (
            <>
              <div
                className="tile"
                onDragStart={() => onDragStart(index)}
                draggable
                onDragOver={e => onDragOver(e, index)}
                onDrop={onDrop}
              >
                {index}
              </div>
            </>
          ))}
        </div>
      </PatternGridStyle>
    );
  }
}

export default PatternGrid;
