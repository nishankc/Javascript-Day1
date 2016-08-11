//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",displayString,false)

var event2 = document.getElementById("button2");
event2.addEventListener("click",replaceWord,false)

var userString = "";

// function to display the orignal string
function displayString(){
    
    userString = document.getElementById("stringInput").value;
   
    
    document.getElementById("output").innerHTML = userString;
   
 
}

// function to replace a word the first time it occurs
function replaceWord(){
    
    var searchedWord = document.getElementById("search").value;
    var replacedWord = document.getElementById("replaced").value;
    var newString = userString.replace(searchedWord,replacedWord);
    
    document.getElementById("output2").innerHTML = newString;
    
}



