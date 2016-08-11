var event1 = document.getElementById("button");
event1.addEventListener("click",taxCalc,false);


function taxCalc() {
    
    //var taxFree = 11000;
    var twentyPercent = 20/100; //32k
    var fortyPercent = 40/100; //32-150
    var fortyFivePercent = 45/100; //150+
    var firstBand = 0;
    var secondBand = 0;
    var thirdBand = 0;
	$('#output').show();
	$('#output2').show();
	$('#output3').show();
    $('#display2').show();
    var orignalGross = parseInt(document.getElementById("gross").value);
    
    if(orignalGross > 150000){
        
        firstBand = 32000 * twentyPercent;
        secondBand = 118000 * fortyPercent;
        thirdBand = (orignalGross - 150000) * fortyFivePercent;
		$('#display2').hide();
		
        
    
        
    }else if(orignalGross <= 150000 && orignalGross > 120000){
		
		firstBand = 32000  * twentyPercent;
        secondBand = (orignalGross-32000) * fortyPercent;
        $('#display2').hide();
		$('#output3').hide();
		
		
		
	}else if(orignalGross > 100000 && orignalGross <= 120000){
		
		var personalAllowance = (orignalGross-100000)/2;
		firstBand = (43000 - personalAllowance) * twentyPercent;
        secondBand = (orignalGross-43000) * fortyPercent;
        $('#display2').hide();
		$('#output3').hide();
		
	}else if(orignalGross <= 100000 && orignalGross > 43000){
        
        firstBand = (43000 - 11000) * twentyPercent;
        secondBand = (orignalGross-43000) * fortyPercent;
        $('#display2').hide();
		$('#output3').hide();
        
    }else if(orignalGross <= 43000 && orignalGross > 11000){
        
        firstBand = (orignalGross-11000) * twentyPercent;
		$('#display2').hide();
		$('#output3').hide();
		$('#output2').hide();
        
    }else if(orignalGross <= 11000){
        document.getElementById("display2").innerHTML = "No Tax";
		$('#output').hide();
		$('#output3').hide();
		$('#output2').hide();
        
    }
    
    document.getElementById("output").innerHTML = "Tax at 20%: " + firstBand; 
	
    document.getElementById("output2").innerHTML = "<br/>Tax at 40%: " + secondBand;
		
	document.getElementById("output3").innerHTML = "<br/>Tax at 45%: " + thirdBand;
    
}