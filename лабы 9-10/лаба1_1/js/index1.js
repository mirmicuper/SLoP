function button_1 () {
function fun1() {
  alert('Вас приветствует учебный центр');         
}
function fun2() {
  let x = prompt('Введите Ваше имя:', 'Имя');
  alert('Добро пожаловать на наши курсы, '+x);
}
function fun3() {
  if (confirm('Вы хотите стать Web-дизайнером?')) { // Ок(True) --> if  Отменить(False) --> else
    alert('Учите стили CSS и JavaScript!');
  }
  else {
    alert('Упускаете время!');
  }
}
fun1();
fun2();
fun3();
}

