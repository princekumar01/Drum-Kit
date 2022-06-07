
var btn = document.querySelectorAll(".drum");

for (var i = 0; i < btn.length;i++)
btn[i].addEventListener("click", handleclick);
   
function handleclick() {
    var element1 = this.innerHTML;
    makesound(element1);
    btnanimation(element1);
}

function makesound(element1)
{
    switch (element1)
    {
        case "w":
            var audio = new Audio('sounds/audio1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/audio2.mp3');
            audio.play();
            break;
        case "s":
                var audio = new Audio('sounds/audio3.mp3');
                audio.play();
                break;
        case "d":
                    var audio = new Audio('sounds/audio4.mp3');
                    audio.play();
                    break;
         case "j":
                        var audio = new Audio('sounds/audio5.mp3');
                        audio.play();
                        break;
        case "k":
                            var audio = new Audio('sounds/audio6.mp3');
                            audio.play();
            break;
            case "l":
                var audio = new Audio('sounds/audio7.mp3');
                audio.play();
                break;
        default: console.log(element1);                                                
}
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);  
    btnanimation(event.key); 
})

function btnanimation(key1)
{
    var active = document.querySelector("." + key1);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}