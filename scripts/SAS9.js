//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",displayString,false)




function displayString(){
    
    var number = parseFloat(document.getElementById("stringInput").value);
    
    
    var normalRound = Math.round(number);
    var upper = Math.ceil(number);
    var lower = Math.floor(number);
   
    document.getElementById("output").innerHTML = "Number with normal rounding: " + normalRound + "<br/>Number rounded up: " + upper + "<br/>Number rounded down: " + lower;       

   
}



