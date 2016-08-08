// Variables and expressions - ex4 - one or both greater than 10

var event1 = document.getElementById("button1");
event1.addEventListener("click", myFunction, false);

function myFunction() {
    var day;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Unknown Day";
    }
    document.getElementById("demo").innerHTML = "Today is " + day + "<br/>And the time is : " + hours + ":" + minutes;
    
}




