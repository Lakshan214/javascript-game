
let start= new Date().getTime();
 

function randomColor(){
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
   
    var hexR = r.toString(16).padStart(2, '0'); 
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');
  
    var color = '#' + hexR + hexG + hexB;
  
    return color;
  }




function shapeAppear(){
    let top = Math.random()*400;
    let left = Math.random()*500;
    let width = Math.random()*150;
    
    if(Math.random()>0.5){
    document.getElementById("shape").style.borderRadius="50%";
    }
    else{
        document.getElementById("shape").style.borderRadius="0";
    }

    document.getElementById("shape").style.backgroundColor=randomColor();

    document.getElementById("shape").style.width=width +"px";
    document.getElementById("shape").style.height=width +"px";

    document.getElementById("shape").style.left=left+"px";
    document.getElementById("shape").style.top=top+"px";
    document.getElementById("shape").style.display="block";
     start = new Date.getTime();
    
}

function shapeAppearDelay(){

setTimeout(shapeAppear, Math.random()*1500);
}
shapeAppearDelay();
document.getElementById("shape").onclick=function()
{
   document.getElementById("shape").style.display="none";
   let end= new Date().getTime();
   let time=(end-start)/1000;
   document.getElementById("time").innerHTML=time;
   shapeAppearDelay();

}