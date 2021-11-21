"use strict";
let arr = [];
// функция вывода на экран введенных парамеров
function wright() {
    let textareal = document.getElementById("textareal").value;
    let userLN = document.forms["data"].userLN.value;
    let userFN = document.forms["data"].userFN.value;
    let spec = document.forms["data"].spec.value;
    let kurs = document.forms["data"].kurs.value;
    //let pred = document.forms["data"].pred.value;
    let pred = document.getElementsByName("pred").innerHTML;
    let ch1 = document.getElementById("ch1");
    let ch2 = document.getElementById("ch2");
    let ch3 = document.getElementById("ch3");
    let ch4 = document.getElementById("ch4"); 

    //контроль отмеченых чекбоксов
for(let i = 1; i < 5; i++) {
    if(i == 1) {
        if (ch1.checked === true) {
            arr.push("ОАиП");
        }
        else;
    }
    if(i == 2) {
        if (ch2.checked === true) {
            arr.push("СЯП");
        }
        else;
    }
    if(i == 3) {
        if (ch3.checked === true) {
            arr.push("КЯРД");
        }
        else;
    }
    if(i == 4) {
        if (ch4.checked === true) {
             arr.push("ТРПО");
        }
        else;
    }
}
    // создание дива для вывода элементов
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = (`${textareal}`);
    div.innerHTML = (`${"<h1>" + textareal + "</h1>" + "Cтудент " + userLN + " специальность " + spec + " курс " + kurs + " должен сдавать следующие предметы: " + "<ul>" + "<li>" + arr[0] + "</li>" + "<li>" + arr[1] + "</li>" + "</ul>"}`);

    document.body.append(div);
} 

let subjects = document.forms["data2"].arr;
    windw.document.write('<ul>');
        for( let i = 0; i< arr.length;i++){
        if(subjects[i].checked) //ниже в комментах
        windw.document.write('<li>'+arr[i].value+'</li>');
        }
    windw.document.write('</ul>');

