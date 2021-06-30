console.clear();

const canvas = document.querySelector('canvas');
const svg = document.querySelector('svg');
const ctx = canvas.getContext('2d');
let width = svg.clientWidth;
let height = svg.clientHeight;

canvas.width = width;
canvas.height = height;

const gradients = [
  [
    [0, [118, 179, 236]],
    [10, [41, 102, 193]],
    [20, [129, 77, 185]],
    [30, [129, 77, 185]],
    [50, [250, 148, 170]],
    [60, [237, 70, 54]],
    [70, [253, 134, 100]],
    [80, [254, 156, 33]],
    [90, [250, 213, 0]],
    [100, [171, 211, 96]]
  ],
  [
    [0, [1, 123, 147]],
    [100, [131, 201, 167]]
  ]
];

const dots = [];
class Dot {
  constructor (x, y, color, delay) {
    this.x = x;   
    this.y = y;
    this.r = 0;
    this.color = color;
    this.delay = (delay * 0.9);
    this.tween = gsap.fromTo(this, {
      r: 0,
      x: x - 0.05,
      y: y - 0.05
    }, {
      x: x,
      y: y,
      r: () => width * 0.03 + (Math.abs(Math.sin(this.delay * 3.4 - 1.5)) * width * 0.02),
      duration: 1.8,
      ease: 'elastic.out(1, 0.5)',
      delay: this.delay
    });
  }
  draw () {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x * width, this.y * height, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function init () {
  const paths = svg.querySelectorAll('path');
  const totalLength = [...paths].reduce((p) => p.getTotalLength());
  let sum_length = 0;
  paths.forEach((path, pathIndex) => {
    const length = path.getTotalLength();
    for (let i = 0; i < length; i+=2) {
      const point = path.getPointAtLength(i);
      const x = point.x / 400;
      const y = point.y / 488;
      const RGB_color = getColor(pathIndex, length, i / length);
      const color = `rgb(${RGB_color[0]}, ${RGB_color[1]}, ${RGB_color[2]})`;
      
      const dot = new Dot(x, y, color, (1.5 - (sum_length / totalLength)));
      dots.push(dot);
      sum_length += 2;
    }
  });
}

/* Code copied from https://stackoverflow.com/a/30144587 */
function pickHex(color1, color2, weight) {
  var p = weight;
  var w = p * 2 - 1;
  var w1 = (w/1+1) / 2;
  var w2 = 1 - w1;
  var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2)];
  return rgb;
}
function getColor(pathIndex, pathLength, colorIndex) {
  var colorRange = [];
  let stop = false;
  const gradient = gradients[pathIndex];
  gradient.forEach((step, index) => {
    if (!stop && (colorIndex * 100) <= step[0]) {
      if (index === 0) {
        index = 1;
      }
      colorRange = [index - 1, index];
      stop = true;
    }
  });

  //Get the two closest colors
  var firstcolor = gradient[colorRange[0]][1];
  var secondcolor = gradient[colorRange[1]][1];
  //Calculate ratio between the two closest colors
  var firstcolor_x = pathLength * (gradient[colorRange[0]][0]/100);
  var secondcolor_x = pathLength * (gradient[colorRange[1]][0]/100)-firstcolor_x;
  var slider_x = pathLength * colorIndex - firstcolor_x;
  var ratio = slider_x / secondcolor_x;

  //Get the color with pickHex(thx, less.js's mix function!)
  return pickHex(secondcolor, firstcolor, ratio);
}


function render () {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, width, height);
  dots.forEach(dot => {
    dot.draw();
  });
}

window.addEventListener('click', () => {
  dots.forEach(dot => {
    dot.tween.restart(true);
  });
});

window.addEventListener('resize', () => {
  width = svg.clientWidth;
  height = svg.clientHeight;

  canvas.width = width;
  canvas.height = height;
  dots.forEach(dot => {
    dot.tween.invalidate().restart(true);
  });
});

init();
requestAnimationFrame(render);