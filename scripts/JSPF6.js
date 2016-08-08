// Variables and expressions - ex4 - one or both greater than 10

var event1 = document.getElementById("button1");
event1.addEventListener("click", myFunction, false);

function myFunction() {
    
    var i = 1;
    while (i < 11) {
    document.getElementById("demo").innerHTML += "<br/>The number is " + i;
    i++;
    }
    
}




