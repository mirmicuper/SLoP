// Таблица номер 1
function fn1() {
    
    document.write("<style>body {background-image: url(fonforlaba_1.jpg); background-size: cover; font-family: Geneva, Arial, Helvetica, sans-serif;}</style>");
    document.write("<style>table {color: brown; border-collapse: collapse; border: 1px solid black; width: 600px;}</style>");
    document.write("<style>tr {text-align: left; background: #B7BBCD; padding: 5px; border: 1px solid black;}</style>");
    document.write("<style>td {padding: 5px; border: 1px solid black;}</style>");
    document.write("<table align='center'>"); //Центрирование

    document.write("<style>.btn2 {color: #FFFFFF; text-decoration: none;'}</style>")

    let row = prompt("Число рядов");
    let cell = prompt("Число строк");

    for (let i = 1; i<=row; i++) {
        document.write("<tr>");
        document.write("<td>" + i + "</td>");

        for (let j = 2; j <= cell; j++) {
            document.write("<td>" + j*i + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

    document.write("<a href='index.html' class='btn2' type='button'>Вернуться назад<a>") //Кнопка "Вернуться назад"
}

// Таблица номер 2
function fn2() {

    document.write("<style>body {background-image: url(fonforlaba_1.jpg); background-size: cover; font-family: Geneva, Arial, Helvetica, sans-serif;}</style>");
    document.write("<style>table {color: brown; border-collapse: collapse; border: 1px solid black; width: 600px; align: center;}</style>");
    document.write("<style>tr {text-align: left; background: #B7BBCD; padding: 5px; border: 1px solid black;}</style>");
    document.write("<style>td {padding: 5px; border: 1px solid black;}</style>");

    document.write("<style>.btn2 {color: #FFFFFF; text-decoration: none;'}</style>")

    document.write("<table align='center'>"); //Центрирование

    let a = Number(prompt("Введите радиус: "));
    let b = Number(prompt("Введите число б: "));

    document.write("<tr>");
    document.write("<td>" + 'Радиус' + "</td>");
    document.write("<td>" + 'Площадь окружнсти' + "</td>");
    document.write("<td>" + 'Длина окружности' + "</td>");
    document.write("</tr>");
    do {
        s = Math.PI * Math.pow(a, 2);
        c = 2 * Math.PI * a;
        

        document.write("<tr>");
        document.write("<td>" + 'R = ' + a + "</td>");
        document.write("<td>" + 'S = ' + Math.round(s) + "</td>");
        document.write("<td>" + 'C = ' + Math.round(c) + "</td>");
        document.write("</tr>");
        a = a + 0.3;
    } 
    while (a <= b) {
        document.write("</table>");
}
    document.write("<a href='index.html' class='btn2' type='button'>Вернуться назад<a>") //Кнопка "Вернуться назад"
}


// Таблица номер 3
function fn3() {

    document.write("<style>body {background-image: url(fonforlaba_1.jpg); background-size: cover; font-family: Geneva, Arial, Helvetica, sans-serif;}</style>");
    document.write("<style>table {color: brown; border-collapse: collapse; border: 1px solid black; width: 600px; align: center;}</style>");
    document.write("<style>tr {text-align: left; background: #B7BBCD; padding: 5px; border: 1px solid black;}</style>");
    document.write("<style>td {padding: 5px; border: 1px solid black;}</style>");

    document.write("<style>.btn2 {color: #FFFFFF; text-decoration: none;'}</style>")

    let a = Number(prompt("Введите a: "));
    let b = Number(prompt("Введите b: "));

    document.write("<table align='center'>"); //Центрирование 
    document.write("<tr>" + "<td>" + 'Число' + "</td>" + "<td>" + 'Метод' + "</td>" + "<td>" + 'Результат' + "</td>" + "<td>" + 'Описание метода' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + a + "</td>" + "<td>" + 'toExponential(3)' + "</td>" + "<td>" + a.toExponential(3) + "</td>" + "<td>" + 'представляет число в экспоненциальной форме' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + b + "</td>" + "<td>" + 'toExponential(3)' + "</td>" + "<td>" + b.toExponential(3) + "</td>" + "<td>" + 'представляет число в экспоненциальной форме' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + a + "</td>" + "<td>" + 'toFixed(3)' + "</td>" + "<td>" + a.toFixed(3) + "</td>" + "<td>" + 'представляет число в форме с фиксированным количеством цифр после точки' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + b + "</td>" + "<td>" + 'toFixed(3)' + "</td>" + "<td>" + b.toFixed(3) + "</td>" + "<td>" + 'представляет число в форме с фиксированным количеством цифр после точки' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + a + "</td>" + "<td>" + 'toPrecision(5)' + "</td>" + "<td>" + a.toPrecision(5) + "</td>" + "<td>" + 'представляет число с заданным общим количеством значащих цифр' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + b + "</td>" + "<td>" + 'toPrecision(5)' + "</td>" + "<td>" + b.toPrecision(5) + "</td>" + "<td>" + 'представляет число с заданным общим количеством значащих цифр' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + a + "</td>" + "<td>" + 'toString(2)' + "</td>" + "<td>" + a.toString(2) + "</td>" + "<td>" + 'возвращает строковое представление числа в системе счисления с указанным основанием' + "</td>" + "</tr>");
    document.write("<tr>" + "<td>" + b + "</td>" + "<td>" + 'toString(2)' + "</td>" + "<td>" + b.toString(2) + "</td>" + "<td>" + 'возвращает строковое представление числа в системе счисления с указанным основанием' + "</td>" + "</tr>");
    document.write("</table>");

    document.write("<a href='index.html' class='btn2' type='button'>Вернуться назад<a>") //Кнопка "Вернуться назад"
}