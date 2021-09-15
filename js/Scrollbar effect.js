let progess = document.getElementById('progessbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progessHeight = (window.pageYOffset / totalHeight) * 100;
    progess.style.height = progessHeight + "%";
}