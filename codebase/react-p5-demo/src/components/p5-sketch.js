
import React from 'react';
import Sketch from 'react-p5';

var x = 50;
var speed = 5;
function P5Sketch() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef);
    }

    const draw = (p5) => {
        p5.frameRate(30);
        // If we're travelling towards the right or left
        if (speed > 0) {
            // If the ball has reached the end of the container or not
            if (x + 50 < p5.width) {
                x += speed
            } else {
                speed = -speed;
            }
        } else {
            if (x - 50 > 0) {
                x += speed;
            } else {
                speed = -speed;
            }
        }

        p5.background(255, 120, 20);
        p5.ellipse(x, 100, 100);
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default P5Sketch;
        