const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const mouse = {
  x: 0,
  y: 0,
};
const particles = [];
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  for (let i = 0; i < 10; i++) {
    particles.push(new Particle());
  }
  hue += 5;
});

// canvas.addEventListener("click", function (e) {
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;

//   for (let i = 0; i < 200; i++) {
//     particles.push(new Particle());
//   }
//   hue += 50;
// });

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.hue = hue;
    this.alpha = 1.0;
    this.color = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
    this.radius = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.radius > 0.2) {
      this.radius -= 0.05;
    }

    if (this.radius < 0.2) {
      this.radius = 0;
    }

    this.alpha -= 0.01;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
}

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

// animate();
