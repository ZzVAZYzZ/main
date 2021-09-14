let start=document.getElementById("start");
let middle=document.getElementById("middle");
let end=document.getElementById("end");
let text=document.getElementById("text");
let sun=document.getElementById("sun");

window.addEventListener("scroll",function(){
    var value = window.scrollY;

    end.style.top = value *0.5 + 'px';
    middle.style.top = value *0.4 + 'px';
    text.style.top = value *1 + 'px';
    sun.style.left = value *0.5 +'px';
    sun.style.top = value *1.5 + 'px';
})