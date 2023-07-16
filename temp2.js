const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
const fillStyle = "royalblue";
const strokeStyle = "#fff";
let particles = [];
let mouse = {
  x: 100,
  y: 100,
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = fillStyle;
ctx.strokeStyle = strokeStyle;

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Particles {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    let startAngle = 0;
    let endAngle = Math.PI * 2;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, startAngle, endAngle);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 1000; i++) {
    particles.push(new Particles());
  }
  animate();
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

init();
