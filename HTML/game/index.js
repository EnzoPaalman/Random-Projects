import Enemycontroller from "./enemycontroller.js";
import Player from "./player.js";
import bulletController from "./BulletController.js";


const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width= 600;
canvas.height = 600;

const background = new Image();
background.src = "img/space.jpg"

const playerBulletController = new bulletController(canvas, 10, "white", true);
const enemyBulletController = new bulletController(canvas, 10, "red", false);
const enemycontroller1 = new Enemycontroller(canvas);
const player = new Player(canvas, 3, playerBulletController);

function game()
{
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    enemycontroller1.draw(ctx);
    player.draw(ctx)
    playerBulletController.draw(ctx);
}

setInterval(game,1000/60);