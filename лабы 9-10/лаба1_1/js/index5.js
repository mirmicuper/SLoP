function button_5 () {
let x = prompt("Введите число x: ");
let y = prompt("Введите число y: ");

if (x>y) {
  alert("x больше y")
}
else if (x<y) {
  alert("x меньше y");
}
else {
  document.write("Ошибка")
}
}