//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",displayString,false)






//function to output inputted String
function displayString(){
    
    var userString = document.getElementById("stringInput").value;
    
    for(var i = 0; i < userString.length; i++){
        
         document.getElementById("output").innerHTML += userString.charAt(i) + "<br/>";
        
    }
   
 
}

