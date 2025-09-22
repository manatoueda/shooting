document.getElementById("txt").innerHTML = "これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d")
let x = 255;
let y = 480;
let w = 0;
let a = 140;
let b = 480;
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    x -= 10;
  } else if (e.key === "ArrowRight") {
    x += 10;
  }
})
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    a-= 10;
  } else if (e.key === "ArrowDown") {
    a += 10;
  }
})
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowAkey") {
    b-= 10;
  } else if (e.key === "ArrowD") {
    b += 10;
  }
})


function gameLoop() {

ctx.fillStyle = "black";
ctx.fillRect (0,0,canvas.clientWidth, canvas.clientHeight);



ctx.fillStyle = "blue";
ctx.fillRect (x,y, 30, 30);

ctx.fillStyle = "vaiolet";
ctx.fillRect (160,w, 4, 60  );
ctx.fillStyle = "red";
ctx.fillRect (a,b, 4, 60  );
w+= 5;


requestAnimationFrame(gameLoop);
}
gameLoop();
