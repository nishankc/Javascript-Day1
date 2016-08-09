var event1 = document.getElementById("button1");
event1.addEventListener("click", randomNumberGame, false);

var randomNumber = Math.round(Math.random()*100);
//var randomNumber = 10;
var count = 0;


  
function randomNumberGame(){
    
    
    var number1 = document.getElementById("number1");
    var a = parseInt(number1.value);
    
    if(a != randomNumber){
        count++;
        //alert("Try Again " + count)
        if(a < randomNumber){
            document.getElementById("demo").innerHTML = "Your Guess Is Too Low";
        }else{
            document.getElementById("demo").innerHTML = "Your Guess Is Too High";
        }
    }else{
        document.getElementById("demo").innerHTML = "The Random Number was: " + randomNumber + "<br>Number of Attempts: " + count + "<br>Well done – correct guess!";
        
    }

}


