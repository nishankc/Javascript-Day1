//Create an array of Countries England, France, Italy, Mexico, Poland, Russia, China, Greece, Egypt, India. Create a  user text input field. User can enter a country. The array is searched and when a match is found the position in the array is displayed and the user is given a message to inform whether the country is present or not in the array.

var event1 = document.getElementById("button1");
event1.addEventListener("click", countries, false);



var arrayOne = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

  
function countries(){
    
    var getCountryinput = document.getElementById("number1").value;
    
    alert(getCountryinput);
    
    for(var i = 0; i < arrayOne.length; i++){
        
        if(arrayOne[i] != getCountryinput){
            
            document.getElementById("demo").innerHTML = "Your County is not in the list! Goodbye!";
            
        } else {
            
            document.getElementById("demo").innerHTML = "Your Country was: " + arrayOne[i] + "<br/>And the position in the array was: " + i;
            break;
        }
    }
}