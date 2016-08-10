//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",displayString,false)




function displayString(){
    
    var userString = document.getElementById("stringInput").value;
    var charInput = document.getElementById("charInput").value;
    var replaceInput = document.getElementById("charReplacement").value;
    var spiltString = userString.split("");
    
    
    
    for(var i = 0; i < spiltString.length; i++){
        
        if(spiltString[i] === charInput){
            
            spiltString[i] = replaceInput;
            
        }
        
    }
    
    document.getElementById("output2").innerHTML = "";
    
    for(var i = 0; i < spiltString.length; i++){
        
        document.getElementById("output2").innerHTML += spiltString[i];
        
    }
   
}



