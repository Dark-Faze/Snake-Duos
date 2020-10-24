let x = 350,
y = 150,
xvel = 4,
yvel = 0,
r = 30,
mouth = 3 * r / 4,
xf = 0,
yf = 0,
len = 1,
count = 0,
xtail = [],
ytail = [],
i = 0,
c = 0,
speed = 4,
b=2;

xtail[0] = x;
ytail[0] = y;

function setup() {
    x = windowWidth / 2;
    y = windowHeight / 2;
    createCanvas(windowWidth, windowHeight);
    food();
    var hammer = new Hammer(document.body, {preventDefault: true});
    hammer.get('swipe').set({
        direction: Hammer.DIRECTION_ALL
    });

    hammer.on("swipe", swiped);
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
    for (k = i-10; k < c; k++) {
     //   fill('black');
   //     ellipse(xtail[k]+xvel, ytail[k]+yvel, r+2, r+2);
        fill('#2d2');
        ellipse(xtail[k], ytail[k], r, r);
    }
    strokeWeight(1.5);
    stroke('black');
    fill('#2d3');
    
    ellipse(x, y, r+2, r+2);
    
    fill('white');
    ellipse(x+2*xvel-2*yvel,y-2*xvel+2*yvel,5*r/12,5*r/12);
    fill('white');
    ellipse(x+2*xvel+2*yvel,y+2*xvel+2*yvel,5*r/12,5*r/12);

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
function swiped(event) {
   console.log(event.direction);
    if (event.direction == 4) { // Direction Right
        xvel = speed;
        yvel = 0;
    } else if (event.direction == 8) { // Direction Up
        xvel = 0;
        yvel = -speed;
    } else if (event.direction == 16) { // Direction Down
        xvel = 0;
        yvel = speed;
    } else if (event.direction == 2) { // Direction Left
        xvel = -speed;
        yvel = 0;
    }
  }