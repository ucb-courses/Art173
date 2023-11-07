import React from 'react';
import Sketch from 'react-p5';

let Canvas_x = 720, Canvas_y = 400

function Bezier() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(Canvas_x, Canvas_y).parent(canvasParentRef);
        p5.stroke(255);
        p5.noFill();
    }

    const draw = (p5) => {
        p5.background(0);
        for (let i = 0; i < 200; i += 20) {
          p5.bezier(
            p5.mouseX - i / 2.0,
            40 + i,
            410,
            20,
            440,
            300,
            240 - i / 16.0,
            300 + i / 8.0
          );
        }        
        
    }



    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default Bezier;
        