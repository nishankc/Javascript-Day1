// Variables and expressions - ex4 - taker user input and display the bigger number.

var event1 = document.getElementById("button1");
event1.addEventListener("click", mySum, false);

function mySum()
{
    //Get user Input
    var userinput1 = parseInt(document.getElementById("input1").value);
    var userinput2 = parseInt(document.getElementById("input2").value);
    
    //check to see which number is bigger and then display
    if(userinput1>userinput2){
        document.getElementById("demo").innerHTML = "The Bigger Number is: " + userinput1;
    }else{
        document.getElementById("demo").innerHTML = "The Bigger Number is: " + userinput2;

    }
}
    
