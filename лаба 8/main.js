function fun1() {
    document.getElementById("p1").style.color = "blue";
}
function fun1_1() {
    document.getElementById("p1").style.color = "black"
}
function fun2 () {
    document.getElementById("p2").style.fontSize = "30px";
}

function fun3 () {
    let img1 = document.getElementById("img1");
    img1.src = "images/mrxcyoj1s3q.jpeg";
}
function fun4 () {
    let textToImg = document.getElementById("img2");
    textToImg.innerHTML = "<img src='images/1234455.jpeg'>"
}

function resize(img, x, y) {
    img.width = x;
    img.height = y;
   }
function getFrame () {
    let addFrame = document.getElementById("addFrame");
    addFrame.style.border = "2px solid black";
}