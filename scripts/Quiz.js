//event listener
var event1 = document.getElementById("button");
event1.addEventListener("click",checkAnswers,false)

//create an object constructor for the quiz questions and answers
function createQuestion(question, answer1, answer2, answer3, answer4, answer) {  
    
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.answer = answer;
        
}

//create array for question list
var questionList = [];

//create the questions
var question1 = new createQuestion("Which Football Team did Steven Gerrard Play for?", "Arsenal", "Manchester United", "Liverpool", "Everton", 3);
var question2 = new createQuestion("Who bought Suarez from Liverpool?", "Barcalona", "Manchester City", "PSG", "Real Madrid", 1);
var question3 = new createQuestion("When did Liverpool last win the Champion League", "2004", "2005", "2006", "2007", 2);
var question4 = new createQuestion("Who is the current manager of Liverpool FC?", "Rafa Benitez", "Arsene Wenger", "Antonio Conte", "Jurgen Klopp", 4);
var question5 = new createQuestion("How many times have Liverpool won the European Cup/Champions League", "Three", "Seven", "Six", "Five", 4);

<<<<<<< HEAD
// add the questions to the array
=======
//add the questions to the array
>>>>>>> origin/master
questionList.push(question1);
questionList.push(question2);
questionList.push(question3);
questionList.push(question4);
questionList.push(question5);


<<<<<<< HEAD
//loop 
=======

//create arrays to find the div id tags on the html page
var questIDTag = ["q1", "q2", "q3", "q4", "q5"];
var ansIDTag = ["a1", "a2", "a3", "a4", "a5"];
var ansBox = ["ans1", "ans2", "ans3", "ans4", "ans5"];
var result = ["result1", "result2", "result3", "result4", "result5"];

//loop to display the questions on the page
>>>>>>> origin/master
for(var i = 0; i < questionList.length; i++){
    
    document.getElementById(questIDTag[i]).innerHTML += questionList[i].question + "<br/>"; 
        
    document.getElementById(ansIDTag[i]).innerHTML +=     
        
        "<ol><li>" + questionList[i].answer1 + "</li><li>" + questionList[i].answer2 + "</li><li>" + questionList[i].answer3 + "</li><li>" + questionList[i].answer4 + "</li></ol>"
    
}

//function to check answers once they have been entered and output the result
function checkAnswers(){
    
    //set counters
    countCorrect = 0;
    countWrong = 0;
    var userAns = "";
   
    //loop to check if the answer is right, prints out if they answer the question correct or incorrect
    for(var i = 0; i < questionList.length; i++){
        
        userAns = parseInt(document.getElementById(ansBox[i]).value);
        
        if(userAns != questionList[i].answer){
            
            document.getElementById(result[i]).innerHTML = "";
            document.getElementById(result[i]).innerHTML += "Incorrect";
            countWrong++;
        }else{
            document.getElementById(result[i]).innerHTML = "";
            document.getElementById(result[i]).innerHTML += "Correct";
            countCorrect++;
        }
        
    }
    
    document.getElementById("display").innerHTML = "Number of Correct Answers: " + countCorrect + "<br/>Number of Incorrect Answers: " + countWrong;
    
}
