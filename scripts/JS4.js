// Variables and expressions - ex3 - taker user input and display on screen.

var event1 = document.getElementById("button1");
event1.addEventListener("click", mySum, false);

function mySum()
{
    //Get user Input
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    
    var sum = parseInt(userinput1) + parseInt(userinput1);
    //Display input to screen
    document.getElementById("demo").innerHTML = sum;
}
