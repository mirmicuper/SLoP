function button_6() {

let num = prompt("Введите день недели: ");

switch (Number(num)) { // перебор с помощью оператора множественного выбора
    case 1: document.write("Понедельник");
    break;
    case 2: document.write("Вторник");
    break;
    case 3: document.write("Среда");
    break;
    case 4: document.write("Четверг");
    break;
    case 5: document.write("Пятница");
    break;
    case 6: document.write("Суббота");
    break;
    case 7: document.write("Воскресенье");
    break;
    default: document.write("В неделе 7 дней!");
    break;
}

}
