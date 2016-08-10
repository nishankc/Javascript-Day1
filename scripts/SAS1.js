//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",modifyText,false)



//function to output modified String
function modifyText(){
    
    var userString = document.getElementById("stringInput").value;
    
    document.getElementById("unmodified").innerHTML = userString;
    document.getElementById("uppercase").innerHTML = userString.toUpperCase();
    document.getElementById("lowercase").innerHTML = userString.toLowerCase();
    
    
}
