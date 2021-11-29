// задание 1
"use strict"

function Gruppa(n, spec, kolich) {
    this.n = n;
    this.spec = spec;
    this.kolich = kolich;

    this.sub_stud = function sub_stud(k) {
        this.kolich-=k;
        document.write("Из группы " + n + " Исключили " + k + " Студентов" + "<br>");
    }
}


let gr1 = new Gruppa(1, "ISaT", 31);
let gr2 = new Gruppa(2, "SoftWareIT", 30);
let gr3 = new Gruppa(3, "ISSofMobileSystem", 29);
let gr4 = new Gruppa(4, "Design", 31);

document.write("До первой сессии: " + "<br>");
document.write(gr1.n, gr1.spec, gr1.kolich + "<br>");
document.write(gr2.n, gr2.spec, gr2.kolich + "<br>");
document.write(gr3.n, gr3.spec, gr3.kolich + "<br>");
document.write(gr4.n, gr4.spec, gr4.kolich + "<br>");
document.write("<br>");

gr1.sub_stud(0);
gr2.sub_stud(2);
gr3.sub_stud(25);
gr4.sub_stud(30);
document.write("<br>");

document.write("После первой сессии: " + "<br>");
document.write(gr1.n, gr1.spec, gr1.kolich + "<br>");
document.write(gr2.n, gr2.spec, gr2.kolich + "<br>");
document.write(gr3.n, gr3.spec, gr3.kolich + "<br>");
document.write(gr4.n, gr4.spec, gr4.kolich + "<br>");
document.write("<br>");


// задание 2
document.write("Второе задание: " + "<br>");
function Student(name, lname) {
    this.name = name;
    this.lname = lname;
    alert(name + "\n" + lname + "\n")

    this.s_b = function s_b(fiz, mat, inf) {
        this.fiz = fiz;
        this.mat = mat;
        this.inf = inf;
        document.write("Средний балл " + name + ": " + (fiz+mat+inf) / 3 + "<br>");
    }
}
// Создание новых объектов
let studOne = new Student("Alexandr", "Gemza");
let studTwo = new Student("Daniil", "Grigoriev");
let studThree = new Student("Taniya", "Shish");

// Использование метода s_b для 3-х новых объектов
studOne.s_b(9, 8, 10);
studTwo.s_b(8, 9, 8);
studThree.s_b(10, 8, 9);

document.write("<br>");

Student.prototype.kurs = this.kurs;
studOne.kurs = 1;
studTwo.kurs = 1;
studThree.kurs = 1;
document.write("После добавления новых свойств: " + "<br>");

document.write("Имя: " + studOne.name + ", Фамилия: " + studOne.lname + ", Курс: " + studOne.kurs +"<br>");
document.write("Имя: " + studTwo.name + ", Фамилия: " + studTwo.lname + ", Курс: " + studTwo.kurs + "<br>");
document.write("Имя: " + studThree.name + ", Фамилия: " + studThree.lname + ", Курс: " + studThree.kurs + "<br>");
document.write("<br>");


// задание 3

//работа delete  в массиве
document.write("Третье задание: " + "<br>");
let mas = new Array(12, 13, 14, 15);
document.write("Исходный массив: " + mas + "<br>");
delete mas[3];
document.write("Полученный массив: " + mas + "<br>");

//Поиск элемента с номером 1 в массиве
document.write(1 in mas);
document.write("<br>");
document.write("name" in studOne);
document.write("<br>");
document.write("n" in gr1);
document.write("<br>");


//Проверка массива по типам данных
document.write("<br>");
document.write(mas instanceof Array);
document.write("<br>");
document.write(mas instanceof String);
document.write("<br>");
document.write(mas instanceof Object);
document.write("<br>");
document.write("<br>");
document.write(studOne instanceof Array);
document.write("<br>");
document.write(studOne instanceof String);
document.write("<br>");
document.write(studOne instanceof Object);
document.write("<br>");
document.write("<br>");
document.write(gr1 instanceof Array);
document.write("<br>");
document.write(gr1 instanceof String);
document.write("<br>");
document.write(gr1 instanceof Object);
document.write("<br>");

//

let asd = function() {
    return 5;
}
console.log(asd()); // возвращение 5

//Проверка типа данных
document.write(typeof gr1.kurs);
document.write("<br>");
document.write(typeof gr1.n);
document.write("<br>");
document.write(typeof gr1.spec);
document.write("<br>");
document.write(typeof gr1.kolich);
document.write("<br>");
document.write(typeof studOne.name);
document.write("<br>");
document.write(typeof studOne.lname);
document.write("<br>");
document.write(typeof asd);
document.write("<br>");
document.write(typeof mas);
document.write("<br>");
document.write(typeof gr1.sub_stud);
