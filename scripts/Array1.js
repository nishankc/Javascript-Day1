//Collect 3 user inputs and allocate them to three members of a new array. Display the array on the webpage.

var event1 = document.getElementById("button1");
event1.addEventListener("click", arrayQuestionone, false);




  
function arrayQuestionone(){
    
    
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    
    var arrayOne = [a,b,c];
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    
}