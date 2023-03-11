
//for button press
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttoninner = this.textContent;
        this.style.color="yellow";
        makesound(buttoninner);
        buttonanimation(buttoninner);
    });
}

document.addEventListener("keydown",function(event){
   
    makesound(event.key);
    buttonanimation(event.key);

});

function makesound(key){
    switch (key) {
        case "w":
            var cras = new Audio("sounds/crash.mp3");
            cras.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var kicktom1 = new Audio("sounds/tom-1.mp3");
            kicktom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:console.log(buttoninner);

            
    }
}

function buttonanimation(currentkey){
    var activebtn=document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");},300
    );
}
    






