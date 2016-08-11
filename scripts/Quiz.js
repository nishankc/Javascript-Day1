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

// add the questions to the array
questionList.push(question1);
questionList.push(question2);
questionList.push(question3);
questionList.push(question4);
questionList.push(question5);


//loop 
for(var i = 0; i < questionList.length; i++){
    
    document.getElementById("demo").innerHTML += questionList[i].question + "<br/>"; 
}

