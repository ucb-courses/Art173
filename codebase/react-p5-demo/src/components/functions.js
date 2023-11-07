
import React from 'react';
import Sketch from 'react-p5';

let Canvas_x = 720, Canvas_y = 400

function Function() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(Canvas_x, Canvas_y).parent(canvasParentRef);
        p5.background(51);
        p5.noStroke();
        p5.noLoop();
    }

    const draw = (p5) => {
        drawTarget(p5, p5.width * 0.25, p5.height * 0.4, 200, 4);
        drawTarget(p5, p5.width * 0.5, p5.height * 0.5, 300, 10);
        drawTarget(p5, p5.width * 0.75, p5.height * 0.3, 120, 6);
    }

    function drawTarget(p5, xloc, yloc, size, num) {
        const grayvalues = 255 / num;
        const steps = size / num;
        for (let i = 0; i < num; i++) {
            p5.fill(i * grayvalues);
            p5.ellipse(xloc, yloc, size - i * steps, size - i * steps);
        }
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default Function;
        