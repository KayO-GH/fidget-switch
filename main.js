var img = document.getElementById('switch-img');
var audio = document.getElementById('audio');

img.addEventListener('click',()=>{
    if(img.src.endsWith("images/off.png")){
        img.src = "./images/on.png";
        document.body.style.backgroundImage = "radial-gradient(circle at top,#F1EFEF, #B0B0B3)";
    }else {
        img.src = "./images/off.png";
        document.body.style.backgroundImage = "radial-gradient(circle at top,#5A5A5A, #2C2B2B)";
    }
    
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
});