// Variables and expressions - ex4 - siplay one less or one more

var event1 = document.getElementById("button1");
event1.addEventListener("click", mySum, false);

function mySum()
{
    //Get user Input
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    var c = parseInt(document.getElementById("input3").value);
    
    var firstCalc = (a + b) * c;
    var secondCalc = a + b + c;
    
    var difference = firstCalc - secondCalc;
    
    
    //display the difference
    
    document.getElementById("demo").innerHTML = "The Difference between putting the numbers in the two formulas is : " + difference;
    

    
}
    
