var i =0;
var txt= "i remember it being the middle of winter, it was cold outside and usually i really hate layering but that day felt nice. I also am a very stubborn person and need to have my coffee cold. my fingers were freezing. my thumb had a cut from zesting lemons for a pasta dish i made my dear friend. i know it's dumb, and the cut was small but i swear i thought i needed to go to the emergency room. maybe i'm just dramatic... i dont know. anyway i mostly had a good day, nothing too drastic.";
const d = new Date();
let minutes = d.getMinutes();
let milliseconds=d.getMilliseconds();
let seconds=d.getSeconds();
let hours=d.getHours();
let sentence;

function typeWriter(){
   
if(i<txt.length){
   
   sentence= document.getElementById("demo").innerHTML+= txt.charAt(i)+ ' ';
   
    i++

    setTimeout(typeWriter,500); 
    // setTimeout(spaceEraser,500); 
}



}

// function spaceEraser(){
   
//     if(milliseconds>= 10000){
//        sentence= txt.char(i).replace(/ /g, '');
//        document.getElementById("demo").innerHTML+=sentence;
       
//         i++
    
//         setTimeout(spaceEraser,500); 
//     }
//     console.log(milliseconds);
    
    
//     }



function fadingButton(){
    // document.getElementById("prompt").style.display="none";
    document.getElementById("prompt").style.animation = "fadeOut 3s";
    document.getElementById("prompt").style.animationFillMode= "forwards";
    document.getElementById("prompt").style.animationTimingFunction= "easeInExpo";
    document.getElementById("prompt").style.position="absolute";
    setTimeout(typeWriter,500);
 
}