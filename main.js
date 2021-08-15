canvas=document.getElementById("my_canas");


window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
   keypressed=e.keyCode;
   console.log(keypressed);

   if(keypressed>64&&keypressed<91)
   {
     document.getElementById("d1").innerHTML="You have pressed Alphabet Key";  
     console.log("You have pressed Alphabet Key");
     alphabet()    
   }
   if(keypressed>47&&keypressed<58)
   {
     document.getElementById("d1").innerHTML="You have pressed Number Key";      
     console.log("You have pressed Number Key");
     number();
   }
   if(keypressed>-1&&keypressed<48)
   {
     document.getElementById("d1").innerHTML="You have pressed other Key"; 
     other();  
       
   }
     if(keypressed>57&&keypressed<64)
   {
     document.getElementById("d1").innerHTML="You have pressed other Key"; 
     other();  
      
   }


if(keypressed=="38")
{
    document.getElementById("d1").innerHTML="Arrow key is pressed";
    arrow();
}

if(keypressed=="40")
{
    
    document.getElementById("d1").innerHTML="Arrow key is pressed";
    arrow();
}

if(keypressed=="39")
{
   document.getElementById("d1").innerHTML="Arrow key is pressed";
   arrow();
}

if(keypressed=="37")
{
    document.getElementById("d1").innerHTML="Arrow key is pressed";
    arrow();
}

function alphabet()
{
   document.getElementById("my_canvas").src="boy-holding-alphabet.jpg"; 
}
function arrow()
{
document.getElementById("my_canvas").src="boy-holding-arrow.jpg";
}
function number()
{
document.getElementById("my_canvas").src="boy-holding-number.jpg";
}
function special()
{
document.getElementById("my_canvas").src="boy-holding-special.jpg";
}
function other()
{
    document.getElementById("my_canvas").src="boy-holding-other.jpg";
}



if(keypressed=="16")
{
    document.getElementById("d1").innerHTML="Special key is pressed";
    special();  
}

if(keypressed=="13")
{
    document.getElementById("d1").innerHTML="Special key is pressed";
    special();
}

if(keypressed=="27")
{
    document.getElementById("d1").innerHTML="Special key is pressed";
    special();
}
}




