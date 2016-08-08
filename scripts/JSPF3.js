// Variables and expressions - ex4 - one or both greater than 10






var event1 = document.getElementById("button1");
event1.addEventListener("click", getInput, false);

var random = "hello";

document.getElementById("demo").innerHTML =  random;

function getInput(){
    
    random = "bye";
    document.getElementById("demo").innerHTML =  random;
    alert(random);
    
    
}

function myLoop()
{
    for(var i = 0; i < 51; i++){
        
        document.getElementById("demo").innerHTML = "<br/>" + i + "<br/>";
    }
     
    
    
    
}




