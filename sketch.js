/**
 * Code challenge #86 - Curve wave based on bees and bombs
 */

let angle = 0;
let w = 30;
let ma; // Magic angle
let maxD;
let orthoD;
let angleIncrease = 0.055;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ma = atan(-1 / sqrt(2));
  maxD = dist(0, 0, 300, 300);
  orthoD = windowHeight;
}

function draw() {
  background(100);
  ortho(-orthoD, orthoD, orthoD, -orthoD, 0, orthoD * 2);

  rotateX(-ma);
  rotateY(-QUARTER_PI);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 50, 400));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w - 1, h, w - 1);
      pop();
    }
  }
  angle -= angleIncrease;
}
