// Variables and expressions - ex4 - siplay one less or one more

var event1 = document.getElementById("button1");
event1.addEventListener("click", mySum, false);

function mySum()
{
    //Get user Input
    var userinput1 = parseInt(document.getElementById("input1").value);
    
    
    //display + & - 1 of the number input
    
    document.getElementById("demo").innerHTML = "The previous Number would be: " + (userinput1-1) + "<br/>This Next Number Would be: " + (userinput1+1);
    

    
}
    
