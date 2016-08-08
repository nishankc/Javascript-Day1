// Variables and expressions - ex4 - nested loops
var event1 = document.getElementById("button1");
event1.addEventListener("click", myFunction, false);

function myFunction() {
    
    
    for(var i = 1; i < 11; i++){
        document.getElementById("demo").innerHTML += "<br/>The number of the first sequence is " + i; 
       
      for(var j = 1; j < 11; j++) { 
        document.getElementById("demo").innerHTML += "<br/>The number of the second sequence is " + j;  
      }
        
    }
    
   
    
}




