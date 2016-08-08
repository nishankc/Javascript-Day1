// Variables and expressions - ex4 - one or both greater than 10

var event1 = document.getElementById("button1");
event1.addEventListener("click", mySum, false);

function mySum()
{
    //Get user Input
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
   
    if(a > 10 && b > 10){
        document.getElementById("demo").innerHTML = "The numbers are both greater than 10";
    }else if(a > 10){
        document.getElementById("demo").innerHTML = "The first number is greater than 10";
    }else if(b > 10){
        document.getElementById("demo").innerHTML = "The second number is greater than 10";
    }
    
    
}
    
