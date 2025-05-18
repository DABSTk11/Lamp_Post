
// document.querySelector("#circle").style.filter = "brightness(0%)";
// document.querySelector(".slider-area").style.filter = "opacity(0%)";
lightOff();
document.querySelector("#circle").style.filter = "brightness(50%)";

var switchOff = true;

document.querySelector(".button").addEventListener("click", function(){
    if(switchOff)
    {
        lightOn();
        switchOff = false;
    }
    else
    {
        lightOff();
        switchOff = true;
    }
});

var slider = document.querySelector(".slide");

slider.addEventListener("input", function(){
    document.querySelector("#circle").style.filter = "brightness(" + slider.value+ "%)";
    document.querySelector(".light-spread").style.filter = "opacity(" + slider.value+ "%)";


});

document.querySelector(".button").addEventListener("mouseenter", function(){
    document.querySelector(".button").classList.add("button-hover");
    
});

document.querySelector(".button").addEventListener("mouseleave", function(){
    document.querySelector(".button").classList.remove("button-hover");
    
});

function lightOff()
{
    console.log("light off");
    document.querySelector(".light-spread").style.visibility = "hidden";
    document.querySelector("input").style.visibility = "hidden";
    document.querySelector("#circle").style.backgroundColor = "#444";
    document.querySelector(".button").textContent = "Turn on";
}

function lightOn()
{
    console.log("light on");
    document.querySelector(".light-spread").style.visibility = "visible";
    document.querySelector("input").style.visibility = "visible";
    document.querySelector("#circle").style.backgroundColor = "wheat";
    document.querySelector(".button").textContent = "Turn Off";
}