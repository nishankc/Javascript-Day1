// Variables and expressions - ex4 - one or both greater than 10






var event1 = document.getElementById("button1");
event1.addEventListener("click", getInput, false);


function getInput(){
    
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    var c = parseInt(document.getElementById("input3").value);
    
    document.getElementById("demo").innerHTML = mySum(a,b,c);
}

function mySum(a,b,c)
{
    //Get user Input
     
    return a + b + c;
    
    
}




