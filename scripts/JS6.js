// Variables and expressions - ex4 - taker user input and display if the numbers are the same or not.

var event1 = document.getElementById("button1");
event1.addEventListener("click", mySum, false);

function mySum()
{
    //Get user Input
    var userinput1 = parseInt(document.getElementById("input1").value);
    var userinput2 = parseInt(document.getElementById("input2").value);
    
    //check to see if the numbers are the same
    if(userinput1 === userinput2){
        document.getElementById("demo").innerHTML = "The Numbers are the same";
    }else{
        document.getElementById("demo").innerHTML = "The Numbers are different";

    }
}
    
