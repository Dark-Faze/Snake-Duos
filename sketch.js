let x = 350;
let y = 150;
let xvel = 0;
let yvel = 0;
let r = 30;
let mouth = 3 * r / 4;
let xf = 0;
let yf = 0;
let len = 1;
let count = 0;
let xtail = [];
let ytail = [];
let i = 0;
let c = 0;
let speed = 4;

xtail[0] = x;
ytail[0] = y;

function setup() {
    x = windowWidth / 2;
    y = windowHeight / 2;
    createCanvas(windowWidth, windowHeight);
    food();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function food() {
    xf = parseInt(r + Math.random() * (windowWidth - 2 * r));
    yf = parseInt(r + Math.random() * (windowHeight - 2 * r));
}
function draw() {
    background('#333333');
    x += xvel;
    y += yvel;
    noStroke();
    fill('#e5f022');
    ellipse(xf, yf, r / 2, r / 2);

    fill('#2d2');
    for (k = i; k < c; k++) {
        ellipse(xtail[k], ytail[k], r, r);
    }
    
    fill('#2d2');
    ellipse(x, y, r, r);

    if (x > windowWidth) {
        x = 0;
    }
    if (x < 0) {
        x = windowWidth;
    }
    if (y > windowHeight) {
        y = 0;
    }
    if (y < 0) {
        y = windowHeight;
    }

    xtail[c] = x;
    ytail[c] = y;
    c++;
    i++;

    // if((x>(xf-mouth)&&(x<(xf+mouth)))&&(y>(yf-mouth)&&(y<(yf+mouth)))){
    if (sqrt((x - xf) * (x - xf) + (y - yf) * (y - yf)) < r / 2) {
        food();
        len++;
        i = i - 10;
    }
    textSize(26);
    fill('#00ffff');
    text('SCORE: ' + len, 20, 40);
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        xvel = -speed;
        yvel = 0;

    }
    else if (keyCode === DOWN_ARROW) {
        xvel = 0;
        yvel = speed;
    }
    else if (keyCode === RIGHT_ARROW) {
        xvel = speed;
        yvel = 0;
    }
    else if (keyCode === UP_ARROW) {
        xvel = 0;
        yvel = -speed;
    }

}