// civ
document.getElementById("civ").onclick = function(){
    document.getElementById("civ_tv").style.display = "block";
    document.getElementById("map_tv").style.display = "none";
    document.getElementById("basic_tv").style.display = "none";
    document.getElementById("techtree_tv").style.display = "none";
    document.getElementById("tactics_tv").style.display = "none";
}
//map
document.getElementById("map").onclick = function(){
    document.getElementById("civ_tv").style.display = "none";
    document.getElementById("map_tv").style.display = "block";
    document.getElementById("basic_tv").style.display = "none";
    document.getElementById("techtree_tv").style.display = "none";
    document.getElementById("tactics_tv").style.display = "none";
}
//basic
document.getElementById("basic").onclick = function(){
    document.getElementById("civ_tv").style.display = "none";
    document.getElementById("map_tv").style.display = "none";
    document.getElementById("basic_tv").style.display = "block";
    document.getElementById("techtree_tv").style.display = "none";
    document.getElementById("tactics_tv").style.display = "none";
}
//tech tree
document.getElementById("techtree").onclick = function(){
    document.getElementById("civ_tv").style.display = "none";
    document.getElementById("map_tv").style.display = "none";
    document.getElementById("basic_tv").style.display = "none";
    document.getElementById("techtree_tv").style.display = "block";
    document.getElementById("tactics_tv").style.display = "none";
}
//tactics
document.getElementById("tactics").onclick = function(){
    document.getElementById("civ_tv").style.display = "none";
    document.getElementById("map_tv").style.display = "none";
    document.getElementById("basic_tv").style.display = "none";
    document.getElementById("techtree_tv").style.display = "none";
    document.getElementById("tactics_tv").style.display = "block";
}


////////////////////////////////
//test