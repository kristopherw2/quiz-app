
// will track what question user is on
let questionNumber = 0;

//will track the amount of questions answered correct for user
let score = 0;

//array containing questions
const QUESTIONS = [
    {
        questionText: "What is the technical name for a sumo wrestler?",
        answers: ['Rikishi', 'Dohyo', 'Sumo', 'Wrestler'],
        correctAnswer: 'Rikishi',
    },
    {
        questionText: "What is the average weight of a sumo wrestler?",
        answers: ['330lbs', '400lbs', '512lbs', '275lbs'],
        correctAnswer: '330lbs',
    },
    {
        questionText: "What does a sumo wrestler eat to gain weight?",
        answers: ['Chankonabe', 'Rice', 'Sushi', 'Protein Shakes'],
        correctAnswer: 'Chankonabe'
    },
    {
        questionText: "What is the name of the ring a sumo wrestler competes in?",
        answers: ['Goji', 'Maegashira', 'Dohyo', 'Kimono'],
        correctAnswer: 'Dohyo'
    },
    {
        questionText: "What is the highest rank a sumo wrestler can obtain?",
        answers: ['Ozeki', 'Maegashira', 'Komusubi', 'Yokozuna'],
        correctAnswer: 'Yokozuna'
    },
    {
        questionText: "What is the name of the belt a sumo wrestler wears?",
        answers: ['Gendai budo', 'Mawashi', 'Rikishi', 'Kimarite'],
        correctAnswer: 'Mawashi'
    },
];

const STORE = {
    //the current view that we are on
    currentView: "question",
    // the current quesiton we are on
    currentQuestion: 0,
    //Number of questions answered correct
    correctAnswer: 0,
    //Number of questions answered incorrectly
    incorrectAnswers: 0,
    //the answer selected by use for the current question if they have chosen one
    currentAnswer: ""
}

// selects current view
function selectView() {
    const currentView = STORE.currentView
    $('section').hide()

    switch (currentView) {
        case 'intro':
            $('#start-view').show()
            break;
        case 'question':
            $('#question-view').show()
            break;
        case 'feedback':
            $('#feedback-view').show()
            break;
        case 'final':
            $('#final-view').show()
            break;
    }
}

//start the quiz
function startQuiz() {
    $('.start-view').on('click', '.start-button', function(event){
        $('.start-view').remove();
        $('#question-view').css('display', 'block')
    });
}


//generates the questions
function generateQuestion() {
    if (questionNumber < QUESTIONS.length) {
        return `<div class="questions-${questionNumber}">
     <section>
         <h2>${QUESTIONS[questionNumber].questionText}</h2>
         <ul>
             <form>
                 <fieldset>
                     <li>
                         <label name="question-answers" for="answer-1">
                             <input type="radio" name="choice" id="answer-1" value="${QUESTIONS[questionNumber].answers[0]}">
                             <span>${QUESTIONS[questionNumber].answers[0]}</span>
                         </label>
                     </li>
                     <li>
                         <label name="question-answers" for="answer-2">
                             <input type="radio" name="choice" id="answer-2" value="${QUESTIONS[questionNumber].answers[1]}">
                             <span>${QUESTIONS[questionNumber].answers[1]}</span>
                         </label>
                     </li>
                     <li>
                         <label name="question-answers" for="answer-3" value="${QUESTIONS[questionNumber].answers[2]}">
                             <input type="radio" name="choice" id="answer-3">
                             <span>${QUESTIONS[questionNumber].answers[2]}</span>
                         </label>
                     </li>
                     <li>
                         <label name="question-answers" for="answer-4" value="${QUESTIONS[questionNumber].answers[3]}">
                             <input type="radio" name="choice" id="answer-4">
                             <span>${QUESTIONS[questionNumber].answers[3]}</span>
                         </label>
                     </li>
                     <input type="submit" value="Submit Your Answer">
                 </fieldset>
             </form>
         </ul>
     </section>
 </div>`
    }
}


//render questions to the dom
function renderQuestion(){
    $('#question-view').html(generateQuestion());
}

function main() {
    startQuiz();
    renderQuestion();
}

$(main);