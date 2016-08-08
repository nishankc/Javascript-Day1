


//function collectArray(){
//    
//    
//    var number1 = document.getElementById("number1");
//    var number2 = document.getElementById("number2");
//    var number3 = document.getElementById("number3");
//    var outputtest = document.getElementById("result");
//    
//    var testArray = [number1.value,number2.value, number3.value];
//    
//   for(i = 0; i < testArray.length; i++){
//    
//       
//       outputtest.innerHTML += testArray[i] + "<br>";
//   }
//}

var userStore = [];

function addToArray(){
    
    var number1 = document.getElementById("number1").value;
    
    userStore.push(number1);
    
    document.getElementById("result").innerHTML = "";
    
    for(i = 0; i < userStore.length; i++){
    
   
       document.getElementById("result").innerHTML += userStore[i] + "<br>";
   }
       
}

function randomWinner() {
    
    var randomNumber = Math.round(Math.random() * (userStore.length-1));
    
    document.getElementById("result2").innerHTML = "The winner is: " + userStore[randomNumber];
}

//function guessCountry() {
//    var countryArray = ["England", "France", "India", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt"];
//    
//    var number1 = document.getElementById("number1").value;
//    
////    for (i=0; i<countryArray.length; i++){
////        
////        if(countryArray[i] == number1){
////            ;
////        } else{
////            
////        }
////    }
//    
//    
//    
//    
//    for (i=0; i<countryArray.length; i++) {
//        
//        if(countryArray[i] != number1){
//            document.getElementById("result").innerHTML = "Country not in the array";
//        } else {
//            document.getElementById("result").innerHTML = countryArray[i] + "<br> The Position in the array is " + (i+1);
//            break;
//        }
//    
//    }
//}
