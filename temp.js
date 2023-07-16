const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
const fillStyle = "royalblue";
const strokeStyle = "#fff";

let mouse = {
  x: 100,
  y: 100,
};
let particle1 = {};
let particle2 = {};
let particle3 = {};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = fillStyle;
ctx.strokeStyle = strokeStyle;

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Particle {
  constructor(deltaX, deltaY) {
    this.x = 0;
    this.y = 0;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    // this.drawCircle = this.drawCircle.bind(this);
  }
  drawCircle() {
    let radius = 20;
    let startAngle = 0;
    let endAngle = Math.PI * 2;
    this.x = mouse.x + this.deltaX;
    this.y = mouse.y + this.deltaY;
    // console.log(this.x, this.y);
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, startAngle, endAngle);
    ctx.fill();
  }
}

particle1 = new Particle(10, 50);
particle2 = new Particle(30, 70);
particle3 = new Particle(100, 200);

function handleParticle() {
  particle1.drawCircle();
  particle2.drawCircle();
  particle3.drawCircle();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  requestAnimationFrame(animate);
}

animate();
