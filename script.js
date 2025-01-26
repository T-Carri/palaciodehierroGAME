const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerWidth = 50;
let playerHeight = 20;
let playerSpeed = 5;
let playerX;
let playerY;

let fallingObjectWidth = 30;
let fallingObjectHeight = 30;
let fallingObjects = [];
let objectSpeed = 2;
let score = 0;

let rightPressed = false;
let leftPressed = false;

// Ajuste de tamaño del canvas según el tamaño de la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8;  // El canvas ocupa el 80% del ancho de la ventana
    canvas.height = window.innerHeight * 0.8; // El canvas ocupa el 80% del alto de la ventana
    playerWidth = canvas.width / 10; // Ajustamos el tamaño del jugador según el ancho del canvas
    playerHeight = canvas.height / 30; // Ajustamos el tamaño del jugador según la altura del canvas
    playerX = (canvas.width - playerWidth) / 2; // Centrar al jugador
    playerY = canvas.height - playerHeight - 10; // Ajustar la posición del jugador en la parte inferior
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();  // Inicializamos el tamaño al cargar

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function createFallingObject() {
    let x = Math.random() * (canvas.width - fallingObjectWidth);
    fallingObjects.push({ x: x, y: 0 });
}

function updatePlayer() {
    if (rightPressed && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    }
    if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
}

function updateFallingObjects() {
    for (let i = 0; i < fallingObjects.length; i++) {
        fallingObjects[i].y += objectSpeed;

        if (fallingObjects[i].y + fallingObjectHeight > canvas.height) {
            if (fallingObjects[i].x > playerX && fallingObjects[i].x < playerX + playerWidth) {
                score++; // Se atrapa el objeto
            }
            fallingObjects.splice(i, 1); // Eliminar el objeto caído
            i--; // Ajustar índice después de eliminar
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

function drawFallingObjects() {
    ctx.fillStyle = "#FF5733";
    for (let i = 0; i < fallingObjects.length; i++) {
        ctx.fillRect(fallingObjects[i].x, fallingObjects[i].y, fallingObjectWidth, fallingObjectHeight);
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Puntaje: " + score, 8, 20);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    updateFallingObjects();
    drawPlayer();
    drawFallingObjects();
    drawScore();

    requestAnimationFrame(gameLoop);
}

function gameStart() {
    setInterval(createFallingObject, 1000); // Crear objeto cada segundo
    gameLoop(); // Iniciar ciclo de juego
}

gameStart();
