"use strict"

for(let i = 0; i < document.all.length; i++) {
    document.write(`${document.all[i].tagName} `);
}
document.write("<br>")
document.write("<div>")
for(let k = 0; k < document.body.childNodes.length; k++) {
    document.write(`${document.body.childNodes[k].tagName} `);

}
document.write("</div>")
document.write("<br>")

for(let w = 0; w < document.body.childNodes.length; w++) {
    let child = document.body.childNodes[w];
    console.log((child.tagName));
}

document.write("<br>")

// 

function searchSpan() {
    alert(document.querySelectorAll(".span").innerHTML);
    alert(document.getElementsByTagName("span")[0].innerHTML);
    alert(document.getElementById("spaner").innerHTML);
}

function sr_ball() {
    let pr1 = document.getElementById("pr1").innerHTML;
    let pr2 = document.getElementById("pr2").innerHTML;
    let pr3 = document.getElementById("pr3").innerHTML;
    pr1 = Number(pr1);
    pr2 = Number(pr2);
    pr3 = Number(pr3);
    let sb = (pr1 + pr2 + pr3) / 3;
    document.getElementById("sb").innerHTML = sb;
    document.getElementsByTagName("span")[1].innerHTML = srbal;    
}
