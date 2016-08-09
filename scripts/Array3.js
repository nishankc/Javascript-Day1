//Add and Remove first and last elements  on and off an array using shift, unshift, push and pop methods

var event1 = document.getElementById("button1");
event1.addEventListener("click", addToArray, false);

var event2 = document.getElementById("button2");
event2.addEventListener("click", removeLastElement, false);

var event3 = document.getElementById("button3");
event3.addEventListener("click", removeFirstElement, false);

var event4 = document.getElementById("button4");
event4.addEventListener("click", displayArray, false);

var event5 = document.getElementById("button5");
event5.addEventListener("click", addToArrayEnd, false);

var event6 = document.getElementById("button6");
event6.addEventListener("click", addToArraySpecific, false);

var arrayOne = [];

  
function addToArray(){
    
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    
    var a = document.getElementById("number1").value;
    
    arrayOne.unshift(a);
    
    
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    document.getElementById("demo1").innerHTML = "The Lenth of the array is " + arrayOne.length;
    
    
}

function addToArraySpecific(){
    
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    
    var a = document.getElementById("number1").value;
    var b = parseInt(document.getElementById("number2").value);
    
    var previousElement = arrayOne[b-1];
    arrayOne[b] = previousElement;
    arrayOne[b-1] = a;
    
   
    
    
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    document.getElementById("demo1").innerHTML = "The Lenth of the array is " + arrayOne.length;
    
    
}

function addToArrayEnd(){
    
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    
    var a = document.getElementById("number1").value;
    
    arrayOne.push(a);
    
    
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    document.getElementById("demo1").innerHTML = "The Lenth of the array is " + arrayOne.length;
    
    
}

function removeLastElement(){
    
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    
    
    arrayOne.pop();
    
    
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    document.getElementById("demo1").innerHTML = "The Lenth of the array is " + arrayOne.length;
    
    
}

function removeFirstElement(){
    
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    
    
    arrayOne.shift();
    
    
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    document.getElementById("demo1").innerHTML = "The Lenth of the array is " + arrayOne.length;
    
    
}

function displayArray(){
    
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
    document.getElementById("demo1").innerHTML = "The Lenth of the array is " + arrayOne.length;
    
    
}