
//event listener 
var event1 = document.getElementById("button");
event1.addEventListener("click",taxCalc,false);





//function to caluculate tax
function taxCalc() {
   
    //setting the variables for the percentages and the bands
    
    var twentyPercent = 20/100; //43k
    var fortyPercent = 40/100; //43-150
    var fortyFivePercent = 45/100; //150+
    var personalAllowance = 11000;
    var newPersonalAllowance = 0;
    var firstBand = 0;
    var secondBand = 0;
    var thirdBand = 0;
    
    
    // jquery to show the div tags
	$('#firstBand').show();
	$('#secondBand').show();
	$('#thirdBand').show();
    $('#netPay').show();
    $('#personalAllowance').show();
    $('#noTax').show();
    $('#chartContainer').show();
    
    
    //get input of the orignal gross
    var orignalGross = parseInt(document.getElementById("gross").value);
    
    // if gross is more than 150,000
    if(orignalGross > 150000){
        
        firstBand = 32000 * twentyPercent;
        secondBand = 118000 * fortyPercent;
        thirdBand = (orignalGross - 150000) * fortyFivePercent;
        personalAllowance = 0;
		$('#noTax').hide();
		
        
    
    //if gross is between 150-120k no personal allowance    
    }else if(orignalGross <= 150000 && orignalGross > 122000){
		
		firstBand = 32000  * twentyPercent;
        secondBand = (orignalGross-32000) * fortyPercent;
        personalAllowance = 0;
        //hide the noTax tag
        $('#noTax').hide();
        //hide the secondBand tag
		$('#thirdBand').hide();
		
		
	//if gross is betwwen 100k and 122k, divide the amount over 100k by 2 then subtract from the personal allowance to create a new personal allowance.	
	}else if(orignalGross > 100000 && orignalGross <= 122000){
		
        //calc for the new personal allowance
		newPersonalAllowance = (orignalGross-100000)/2;
        personalAllowance = personalAllowance - newPersonalAllowance;
		firstBand = (43000 - personalAllowance) * twentyPercent;
        secondBand = (orignalGross-43000) * fortyPercent;
        //hide the noTax tag
        $('#noTax').hide();
        //hide the thirdBand tag
		$('#thirdBand').hide();
	
    //if gross is between 43k-100k calculate first and second band tax rates
	}else if(orignalGross <= 100000 && orignalGross > 43000){
        
        firstBand = (43000 - 11000) * twentyPercent;
        secondBand = (orignalGross-43000) * fortyPercent;
        //personalAllowance = 11000;
        //hide noTax
        $('#noTax').hide();
        //hide thirdBand
		$('#thirdBand').hide();
     
    //if the gross is between 11k-43k just caluclate the first band    
    }else if(orignalGross <= 43000 && orignalGross > 11000){
        
        firstBand = (orignalGross-11000) * twentyPercent;
        //personalAllowance = 11000;
        //hide noTax
		$('#noTax').hide();
        //hide thirdBand
		$('#thirdBand').hide();
        //hide secondBand
		$('#secondBand').hide();
     
    //caluclate no tax if less than or equal to 11k or greater than 0   
    }else if(orignalGross <= 11000 && orignalGross > 0){
        document.getElementById("noTax").innerHTML = "<b>No Tax<b>";
        personalAllowance = orignalGross;
		$('#firstBand').hide();
		$('#thirdBand').hide();
		$('#secondBand').hide();
        $('#chartContainer').hide();
        
    }else{
        
        //alert on incorrect input and hide everything as it doesnt need to be seen
        alert("Incorrect Input");
        $('#firstBand').hide();
		$('#thirdBand').hide();
		$('#secondBand').hide();
        $('#netPay').hide();
        $('#personalAllowance').hide();
        $('#chartContainer').hide();
    }
    
    //display the net pay
    var netPay = orignalGross - firstBand - secondBand - thirdBand-newPersonalAllowance;
    
    //display the PA
    document.getElementById("personalAllowance").innerHTML = "<b>Your Tax Free Personal Allowance is: £<b>" + personalAllowance;
    
    //display the firstBand
    document.getElementById("firstBand").innerHTML = "<br/><b>Tax at 20%: £<b>" + firstBand; 
	
    //display the secondBand
    document.getElementById("secondBand").innerHTML = "<br/><b>Tax at 40%: £<b>" + secondBand;
	
    //display thirdBand
	document.getElementById("thirdBand").innerHTML = "<br/><b>Tax at 45%: £<b>" + thirdBand;
    
    //display NetPay
    document.getElementById("netPay").innerHTML = "<br/><b>Your Net Pay is: £<b>" + netPay;
    
    //create the chart
    var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Your Pay Broken Down"
		},
                animationEnabled: true,
		legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		data: [
		{        
			indexLabelFontSize: 20,
			indexLabelFontFamily: "sans-serif",       
			indexLabelFontColor: "darkgrey", 
			indexLabelLineColor: "darkgrey",        
			indexLabelPlacement: "outside",
			type: "doughnut",       
			showInLegend: true,
			toolTipContent: "£{y} - <strong>#percent%</strong>",
			dataPoints: [
				{  y: firstBand, legendText:"20%", indexLabel: "First Band - £" + firstBand },
				{  y: secondBand, legendText:"40%", indexLabel: "Second Band - £" + secondBand },
				{  y: thirdBand, legendText:"45%", indexLabel: "Third Band - £" + thirdBand },
				{  y: netPay, legendText:"Net Pay" , indexLabel: "Your Annual Net Pay"}
				
			]
		}
		]
	});
	chart.render();
}


