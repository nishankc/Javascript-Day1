var questions = [];
var answers = [];
//create an object constructor for the quiz questions and answers
function question(quest, answer){  
    
    this.quest = quest;
    this.answer = answer;

    
}

//create a question
var question1 = new question("Question one", "Answer");
var question2 = new question("Question two", "Answer");
var question3 = new question("Question three", "Answer");
var question4 = new question("Question four", "Answer");
var question5 = new question("Question five", "Answer");



questions = [question1.quest, question2.quest, question3.quest, question4.quest, question5.quest]


//output question

for(var i = 0; i < questions.length; i ++){

    document.getElementById("demo").innerHTML += questions[i] + "<br/>";
    
}
