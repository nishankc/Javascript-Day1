//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",displayString,false)

var event2 = document.getElementById("button2");
event2.addEventListener("click",searchString,false)

var userString = "";


//function to output inputted String
function displayString(){
    
    userString = document.getElementById("stringInput").value;
    
    document.getElementById("output").innerHTML = userString;
 
}

// search the string if value exsits
function searchString(){
    
    var searchString = document.getElementById("stringSearch").value;
    
    var result = userString.indexOf(searchString);
    
    document.getElementById("outputResult").innerHTML = result;
 
}
