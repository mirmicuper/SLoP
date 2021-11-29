
const images = document.getElementsByTagName("img");
const textareas = document.getElementsByTagName("textarea");
window.addEventListener("mousemove", mouseMove);

//Задание 1
function mouseMove(event) {
	if (Mouse.Lbtn) {
		Mouse.posX = event.clientX;
		Mouse.posY = event.clientY;
	}
}

let Mouse = {
	targetImage: null,
	posX: null,
	posY: null,
	dx: null,
	dy: null,
	Lbtn: false
};

for (let index = 0; index < 1; index++) //images.length
{
	images[index].onmousedown = imageMouseDown;
	images[index].onmouseup = imageMouseUp;
}
for (let index = 0; index < textareas.length; index++) {
	textareas[index].onmousedown = imageMouseDown;
	textareas[index].onmouseup = imageMouseUp;
}

function imageMouseDown(event) {
	event.preventDefault();
	Mouse.targetImage = this;
	Mouse.Lbtn = true;
	Mouse.posX = event.clientX;
	Mouse.posY = event.clientY;

	Mouse.dx = event.layerX;
	Mouse.dy = event.layerY;

	imageMove();
}


function imageMouseUp() {
	Mouse.Lbtn = false;
	Mouse.targetImage = null;
}


function imageMove() {
	if (Mouse.Lbtn) {
		Mouse.targetImage.style.top = Mouse.posY - Mouse.dy + "px";
		Mouse.targetImage.style.left = Mouse.posX - Mouse.dx + "px";
		window.requestAnimationFrame(imageMove);
	}
}


//Задание 2
sunflower.onclick = function () {
	let start = Date.now();
	let timer = setInterval(function () {
		let timePassed = Date.now() - start;
		sunflower.style.left = timePassed / 7 + 'px';
		if (timePassed > 5000)
			clearInterval(timer);
	}, 10);
}

//


let ball = document.getElementById('ball');

ball.onclick = function () { // ракета 
	let start = Date.now();

	let timer = setInterval(function () {
		let timePassed = Date.now() - start;
		if (timePassed >= 1000) {
			drawt(10, 10)
			clearInterval(timer);
			return;
		}
		draw(timePassed);

	}, 10);


	function draw(timePassed) {
		ball.style.top = timePassed / 2 + 'px';
		ball.style.left = Math.pow(timePassed / 50, 2) - 2 * timePassed / 80 + 'px';
	}


	function drawt(x, y) {
		ball.style.top = x + 'px';
		ball.style.left = y + 'px';
	}
}



//
let cw = canvas.width, ch = canvas.height;
let ctx = document.getElementById('canvas').getContext('2d');
let m = 5;

function draw() { //функция рисования графика выбранной функции
	for (x = -cw / 2 / m; x < cw / 2 / m; x += 1 / m) {
		eval(document.forms['one'].elements['s'].value);
		ctx.fillRect(x * m + cw / 2, ch - (y * m + ch / 2), 2, 5);
		ctx.fillStyle = document.getElementById('color').value;
	}
}



