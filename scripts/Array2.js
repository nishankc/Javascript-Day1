//Collect a user input and allocate it to a new array using the push method. Display the array and the length of the array (number of elements) using array.length on the webpage

var event1 = document.getElementById("button1");
event1.addEventListener("click", addToArray, false);


var arrayOne = [];

  
function addToArray(){
    
    
    var a = document.getElementById("number1").value;
    
    arrayOne.push(a);
    
    
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    document.getElementById("demo1").innerHTML = "The Lenth of the array is " + arrayOne.length;
    
    
}