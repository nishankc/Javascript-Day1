//find and implement code to round a number to any number of decimal places, as specified by the user


var event1 = document.getElementById("button");
event1.addEventListener("click",displayString,false)




function displayString(){
    
    var number = parseFloat(document.getElementById("stringInput").value);
    var decimal = parseInt(document.getElementById("decimal").value);
    
   
   
    document.getElementById("output").innerHTML = number.toFixed(decimal);

   
}



