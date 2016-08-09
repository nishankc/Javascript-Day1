//Create an object literal with 3 properties


//create an object constructor
function myFunction(firstName, secondName, age){  
    
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;

    
}

//create a person1
var person1 = new myFunction("Bob", "Patel", 50);
//create a person2
var person2 = new myFunction("Del", "Trotter", 20);

//output person1
document.getElementById("demo").innerHTML = "Name : " + person1.firstName + "<br/>Surname: " + person1.secondName + "<br/>Age: " + person1.age;

//output person2
document.getElementById("demo1").innerHTML = "Name : " + person2.firstName + "<br/>Surname: " + person2.secondName + "<br/>Age: " + person2.age;