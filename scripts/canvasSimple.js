//find and implement code to round a number to any number of decimal places, as specified by the user


var event1 = document.getElementById("button");
event1.addEventListener("click",displayChart,false)




function displayChart(){
    
    var mango = parseInt(document.getElementById("mango").value);
    var banana = parseInt(document.getElementById("banana").value);
    var apple = parseInt(document.getElementById("apple").value);
    var pear = parseInt(document.getElementById("pear").value);
    var orange = parseInt(document.getElementById("orange").value);
    
    
    
    var fruitNumbers = [mango,banana,apple,pear,orange];
    
   
   
    var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Basic Chart of fruits"              
		},
		animationEnabled: true,   // change to true
		data: [              
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "pie",
			dataPoints: [
				{ label: "mango",  y: fruitNumbers[0]  },
				{ label: "banana", y: fruitNumbers[1]  },
				{ label: "apple", y: fruitNumbers[2]  },
				{ label: "pear",  y: fruitNumbers[3]  },
				{ label: "orange",  y: fruitNumbers[4]  }
			]
		}
		]
	});
    
	chart.render();
    //document.getElementsByClassName("hidden").style.display = "none";
    $('.hidden').hide();
   
}



