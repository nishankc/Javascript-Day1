//Create an object literal with 3 properties

var event1 = document.getElementById("button1");
event1.addEventListener("click", myFunction, false);

function myFunction(){
    
    var Person = new Object();
    
        Person = {
        firstName: "Bob",
        secondName: "Patel",
        age: 50,
        description:{
            eyeColour: "blue",
            hairColour: "black"
        },
        fullName: function(){
            return this.firstName + " " + this.secondName;
        }
    };
    
    
    
    document.getElementById("demo").innerHTML = "The Full Name is: " + Person.fullName() + " And the Age is: " + Person.age;
    
    document.getElementById("demo1").innerHTML = "Description <br/>Eye Colour: " + Person.description.eyeColour + "<br/>Hair Colour: " + Person.description.hairColour;

}

