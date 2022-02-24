var dino = document.getElementById("dinosaur");
var rock = document.getElementById("rock");

function jump(){
    if(dino.classList != "animation"){
        dino.classList.add("animation");
    }
    setTimeout(function(){
        dino.classList.remove("animation")
    }, 500);
}
var checkHits = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    if(rockLeft < 20 && rockleft > -20  && characterTop >= 130){
        alert('Game over');
    }
}, 10);