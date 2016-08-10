//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",displayString,false)



function displayString(){
    
    var userString = document.getElementById("stringInput").value;
    var charInput = document.getElementById("charInput").value;
    var indexInput = parseInt(document.getElementById("indexInput").value) - 1;
    
    var newString = userString.replace(userString.charAt(indexInput),charInput);
    
    document.getElementById("output").innerHTML = newString;
   
 
}



