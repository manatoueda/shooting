
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d")

const player = {
  x: canvas.clientWidth / 2 - 15,
  y: canvas.clientHeight - 60,
  width: 30,
  height: 30,
  color: "yellow",
life: 3,
};

const bullets = [];
const BULLET_SPEED = -10;
function tryShoot() {
bullets.push({
    x: player.x,
    y: player.y,
    width: 5,
    height: 5,
    vy: BULLET_SPEED,
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    player.x -= 10;
  } else if (e.key === "ArrowRight") {
    player.x += 10;
  } else if (e.code === "Space") {
    tryShoot();
  }
});

function update() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    if (bullet.y < 0) {
      bullets.splice(i, 1);
    }
}
}
function draw() {
  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = "white";
  for (let i = 0; i < bullets.length; i++) {
    const bullet = bullets[i];
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  }

}





function gameLoop() {
update();
draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();