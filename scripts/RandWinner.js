//Users can input elements into an array and then select a random winner from that array and display it on the screen

var event1 = document.getElementById("button1");
event1.addEventListener("click", AddtoList, false);

var event2 = document.getElementById("button2");
event2.addEventListener("click", randomWinner, false);



var arrayOne = [];

  
function AddtoList(){
    
    
    document.getElementById("demo").innerHTML = "";
    
    var a = document.getElementById("number1").value;
    
    arrayOne.push(a);
    
    
    
    for(i = 0; i < arrayOne.length; i++){
        
        document.getElementById("demo").innerHTML += arrayOne[i] + "<br/>";
        
    }
    
    
}

function randomWinner(){
    
    var randomNumber = Math.floor(Math.random()*arrayOne.length);
    
    document.getElementById("demo1").innerHTML = "The Winner is: " + arrayOne[randomNumber];
}