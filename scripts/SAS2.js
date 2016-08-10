//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",modifyText,false)



//function to output modified String
function modifyText(){
    
    var userString = document.getElementById("stringInput").value;
    var indexString = parseInt(document.getElementById("indexInput").value) - 1;
    document.getElementById("output").innerHTML = "";
    
    var spiltString = userString.slice("");
    
    for(indexString ; indexString < spiltString.length; indexString++){
        
         document.getElementById("output").innerHTML += spiltString[indexString] + "<br/>";
        
    }
    
   
    
    
}
