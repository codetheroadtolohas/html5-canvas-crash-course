const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
// const fillStyle = "royalblue";
// const strokeStyle = "#fff";
const particles = [];
const mouse = {
  x: 0,
  y: 0,
};

let hue = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = fillStyle;
// ctx.strokeStyle = strokeStyle;

// canvas.addEventListener("click", function (e) {
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
//   for (let i = 0; i < 5; i++) {
//     particles.push(new Particle());
//   }
// });

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle());
    hue++;
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 16 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = "hsl(" + hue + ", 100%, 50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.radius > 0.2) {
      this.radius -= 0.05;
    }
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// function init() {
//   for (let i = 0; i < 500; i++) {
//     particles.push(new Particle());
//   }

//   animate();
// }

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].radius < 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
