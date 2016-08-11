var event1 = document.getElementById("button");
event1.addEventListener("click",taxCalc,false);


function taxCalc() {
    
    //var taxFree = 11000;
    var twentyPercent = 20/100; //32k
    var fortyPercent = 40/100; //32-150
    var fortyFivePercent = 45/100; //150+
    
    var orignalGross = parseInt(document.getElementById("gross").value);
    
    if(orignalGross > 150000){
        
        var firstBand = 32000 * twentyPercent;
        var secondBand = 118000 * fortyPercent;
        var thirdband = (orignalGross - 150000) * fortyFivePercent;
        
        document.getElementById("display").innerHTML = "Tax at 20%: " + firstBand + "<br/>Tax at 40%: " + secondBand + "<br/>Tax at 45%: " + thirdband;
        
    }else if(orignalGross <= 150000){
        
        firstBand = 32000 * twentyPercent;
        secondBand = (orignalGross-32000) * fortyFivePercent;
       
        document.getElementById("display").innerHTML = "Tax at 20%: " + firstBand + "<br/>Tax at 40%: " + secondBand;
        
    }
    
    
}