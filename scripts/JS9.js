// Variables and expressions - ex4 - siplay one less or one more

var event1 = document.getElementById("button1");
event1.addEventListener("click", mySum, false);

function mySum()
{
    //Get user Input
    var a = parseInt(document.getElementById("input1").value);
   
    if(a < 0){
        document.getElementById("demo").innerHTML = "The Number is Negative";
    }else if(a < 10){
        document.getElementById("demo").innerHTML = "The Number is Less than 10";
    }else if(a > 10){
        document.getElementById("demo").innerHTML = "The Number is greater than 10";
    }else{
        document.getElementById("demo").innerHTML = "You Probably entered 10";
    }
    
    
    

    
}
    
