var event1 = document.getElementById("button1");
event1.addEventListener("click", intrestRateCalc, false);


  
function intrestRateCalc(){
    
    
    
    
    var borrow = document.getElementById("borrow");
    var months = document.getElementById("months");
    var interestrate = document.getElementById("interestrate");

    var a = parseInt(borrow.value);
    var b = parseInt(months.value);
    var c = parseFloat(interestrate.value);
    
    
    var totalInterest = a * (c/100);
    var monthlyInterest = (totalInterest/b).toFixed(2);
    
    document.getElementById("demo").innerHTML = "The Monthly Interest amount is: " + monthlyInterest + "<br>The Total interest is: " + totalInterest; 
    

}


