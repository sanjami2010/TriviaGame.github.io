//basic html wire frame
//variables for timer
var timerRemaining;
//variable for the questions to hold
var questions = [
    {
        question: "A truck driver is going down a one way street the wrong way, and passes at least ten cops. Why is he not caught? ",
        answers: ["Because he was not driving! He’s walking on the sidewalk.", "He wears seat belt", "He's confident on his driving skills"],
        correctAnswer: "The correct answer"
    },
    {

        
    },
    {},
]
//variables  for correct/incorrect/unanswered question 
var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;
//on page load a start button should be displayed.
//when button is clicked the game should start.
function startGame(){
    //When the button is clicked it removes (.remove()) itself from the DOM

    //When the function runs some text is appended (.append()) to the DOM
        //Append the timer
        //Append the questions
        //Append the answer options
        //Append another button called "DONE"
}

$('#start').onClick(startGame())
//on page load a timer should be displayed with count down on screen.
//answer validation
   /* < script type = "text/javascript" >
        $(function () {
            $("#form").validate({
                rules: {
                    question: "required"
                },
                messages: {
                    accountType: "You must select an account type"
                }
            });
        });
        
    </script >*/