// 1 задание
document.write("Первое задание:" + "<br>")

var x = new Array;

x[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.exp(8);
x[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
x[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
x[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);

document.write(x[0] + "<br>");
document.write(x[1] + "<br>");
document.write(x[2] + "<br>");
document.write(x[3] + "<br>");
document.write("<br>");



// 2 задание
document.write("Второе задание:" + "<br>")


let arr1 = new Array();
arr1[0] = "PI";
arr1[1] = "push()";
arr1[2] = "slice()";
arr1[3] = "random()";

document.write(arr1 + "<br>");
document.write(`Длина изначального массива до преобразований - ${arr1.length}` + "<br>");

let arrMath = arr1.slice(0, 3);
arr1.pop();
arr1.shift();

let arrArray = new Array();
arrArray[0] = arr1[0];
arrArray[1] = arr1[1];

arrMath.unshift("sqrt()");
arrArray.push("unshift()");


document.write(arr1 + "<br>");
document.write(`Длина изначального массива после преобразований - ${arr1.length}` + "<br>");

document.write(arrMath + "<br>");
document.write(`Длина математического массива arrMath - ${arrMath.length}`+ "<br>");

document.write(arrArray + "<br>");
document.write(`Длина массива arrArray - ${arrArray.length}` + "<br>");

// Пример использования оператора spread 
document.write(...arrMath); //spread нуже для раскрытия массива

document.write("<br>");


// 3 задание
document.write("Третье задание:" + "<br>")

let firstName = "Alexandr";
let lastName = "Gemza";
let fatherName = "Vladimirovich";

let longlet = firstName.length + lastName.length + fatherName.length;
document.write( "Длина ФИО: " + longlet + " символов" + "<br>");

let upcs = firstName.toUpperCase() + "\n" + lastName.toUpperCase() + "\n" + fatherName.toUpperCase();
let lwcs = firstName.toLowerCase() + "\n" + lastName.toLowerCase() + "\n" + fatherName.toLowerCase();

document.write(upcs + "<br>");
document.write(lwcs + "<br>");
document.write(upcs.concat(lwcs) + "<br>"); 

let fN = firstName.replace("Alexandr","A");
let lN = lastName.replace("Gemza","G");
let faN = fatherName.replace("Vladimirovich","V");

let fio = firstName + "\n" + lastName + "\n" + fatherName;

document.write("Исходные данные: "+ fio + "<br>");
document.write("Исходные данные: "+ fN + lN + faN + "<br>");
document.write("<br>");



// 4 задание
document.write("Четвертое задание:" + "<br>")

now = new Date();

document.write("<table border=1>")
document.write("<tr >" + "<td bgcolor=#D3D3D3>" + "Год" + "</td>" + "<td>" + now.getFullYear() + "</td>")
document.write("<tr>" + "<td bgcolor=#D3D3D3>" + "Месяц" + "</td>" + "<td>" + now.getMonth() + "</td>")
document.write("<tr>" + "<td bgcolor=#D3D3D3>" + "День" + "</td>" + "<td>" + now.getDay() + "</td>")
document.write("<tr>" + "<td bgcolor=#D3D3D3>" + "Час" + "</td>" + "<td>" + now.getHours() + "</td>")
document.write("<tr>" + "<td bgcolor=#D3D3D3>" + "Минута" + "</td>" + "<td>" + now.getMinutes() + "</td>")
document.write("<tr>" + "<td bgcolor=#D3D3D3>" + "Секунда" + "</td>" + "<td>" + now.getSeconds() + "</td>")    
document.write("</table>")



// const citiesOfBel = new Array();
// citiesOfBel[0] = "Minsk";
// citiesOfBel[1] = "Gomel";
// citiesOfBel[2] = "Brest";

// document.write(...citiesOfBel);  