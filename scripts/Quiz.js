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
var question1 = new createQuestion("Question 1", "Answer 1", "Answer 2", "Answer 3", "Answer 4", 1);
var question2 = new createQuestion("Question 2", "Answer 1", "Answer 2", "Answer 3", "Answer 4", 2);
var question3 = new createQuestion("Question 3", "Answer 1", "Answer 2", "Answer 3", "Answer 4", 3);
var question4 = new createQuestion("Question 4", "Answer 1", "Answer 2", "Answer 3", "Answer 4", 4);
var question5 = new createQuestion("Question 5", "Answer 1", "Answer 2", "Answer 3", "Answer 4", 2);

questionList.push(question1);
questionList.push(question2);
questionList.push(question3);
questionList.push(question4);
questionList.push(question5);




var questIDTag = ["q1", "q2", "q3", "q4", "q5"];
var ansIDTag = ["a1", "a2", "a3", "a4", "a5"];
var ansBox = ["ans1", "ans2", "ans3", "ans4", "ans5"];
var result = ["result1", "result2", "result3", "result4", "result5"];

for(var i = 0; i < questionList.length; i++){
    
    document.getElementById(questIDTag[i]).innerHTML += questionList[i].question + "<br/>"; 
        
    document.getElementById(ansIDTag[i]).innerHTML +=     
        
        "<ol><li>" + questionList[i].answer1 + "</li><li>" + questionList[i].answer2 + "</li><li>" + questionList[i].answer3 + "</li><li>" + questionList[i].answer4 + "</li></ol>"
    
}

function checkAnswers(){
    
    countCorrect = 0;
    countWrong = 0;
    var userAns = "";
    
    for(var i = 0; i < questionList.length; i++){
        
        userAns = parseInt(document.getElementById(ansBox[i]).value);
        
        if(userAns != questionList[i].answer){
            
            //document.getElementById(result[i]).innerHTML += "Incorrect";
            countWrong++;
        }else{
            //document.getElementById(result[i]).innerHTML += "Correct";
            countCorrect++;
        }
        
    }
    
    document.getElementById("display").innerHTML = "Number of Correct Answers: " + countCorrect + "<br/>Number of Incorrect Answers: " + countWrong;
    
}
