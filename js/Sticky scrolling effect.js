const header = document.querySelector("header ul");

window.addEventListener("scroll", function(){
    if (window.scrollY >= 920){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
})