"use strict";
// let infUserBrowser = document.getElementById("infUserBrowser");
// let browserVersion = document.getElementById("browserVersion");
// let browserName = document.getElementById("browserName");
// let browserCodeName = document.getElementById("browserCodeName");
// let userOS = document.getElementById("userOS");
// let browserJava = document.getElementById("browserJava");
// let screenWidthHight = document.getElementById("screenWidthHight");
// let deepColor = document.getElementById("deepColor");
// let URLHistory = document.getElementById("URLHistory");
// let thisURL = document.getElementById("thisURL");
// let sourceDoc = document.getElementById("sourceDoc");
// let domenNameDoc = document.getElementById("domenNameDoc");

//button 1
function ggle() {
    window.open("https://google.com");
}
function yand() {
    window.open("https://yandex.by");
}
function gglemaps() {
    window.open("https://google.by/maps");
}
function wiki() {
    window.open("https://wikipedia.org")
}
// document.write('Информация о браузере:' + navigator.userAgent);
// Метода assign() позволяет загрузить новый документ в данное окно браузер (изменить текущий URL на желаемый).
function iub() {
document.getElementById("infUserBrowser").innerHTML = navigator.userAgent;
}
function browver() {
document.getElementById("browserVersion").innerHTML = navigator.appVersion;
}
function browname() {
document.getElementById("browserName").innerHTML = navigator.appName;
}
function browcodename() {
    document.getElementById("browserCodeName").innerHTML = navigator.appCodeName;
    }
function useros() {
document.getElementById("userOS").innerHTML = navigator.platform;
}
function javaon() {
    document.getElementById("browserJava").innerHTML = navigator.javaEnabled();
}

function screenwidhei() {
    document.getElementById("screenWidthHeight").innerHTML = screen.height + "x" + screen.width;
}
function colordeep() {
    document.getElementById("deepColor").innerHTML = screen.colorDepth;
}
function historloc() {
    document.getElementById("URLHistory").innerHTML = history.length;
}
function hrefloc() {
    document.getElementById("thisURL").innerHTML = location.href;
}
function pathamloc() {
    document.getElementById("sourceDoc").innerHTML = location.pathname;
}
function domenhost() {
    document.getElementById("domenNameDoc").innerHTML = location.host;
}
function newWindow() {
    let newWindow = window.open();
    newWindow.document.write("Произвольный текст")
}