// Variables and expressions - ex3 - taker user input and display on screen.

var event1 = document.getElementById("button1");
event1.addEventListener("click", myFirst, false);

function myFirst()
{
    //Get user Input
    var userinput1 = document.getElementById("input1").value;
    
    //Display input to screen
    document.getElementById("demo").innerHTML = userinput1;
}
