
// will track what question user is on
let questionNumber = 0;

//will track the amount of questions answered correct for user
let score = 0;

function updateQuestionNumber() {
    questionNumber++
    //$('.question-counter').text(`${questionNumber+1} of 6`);
    //console.log(questionNumber);
}

//update quest counter txt
function updateQuestionCounter() {
    $('.question-counter').text(`Question: ${questionNumber + 1}/6`);
}

//increases score
function addScore() {
    score++;
}

//array containing questions
const QUESTIONS = [
    {
        questionText: "What is the technical name for a sumo wrestler?",
        answers: ['Yokozuna', 'Dohyo', 'Sumo', 'Rikishi'],
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
        answers: ['Dohyo', 'Maegashira', 'Genji', 'Kimono'],
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
//for images
const imageStore = [
    {
        image: 'https://i.imgur.com/HXvNcxf.jpg',
        description: 'a picture of a rikishi'
    },
    {
        image: 'https://i.imgur.com/LmuepqM.jpg',
        description: 'a picture of two rikishi wrestling'
    },
    {
        image: 'https://i.imgur.com/uL0mnSy.jpg',
        description: 'a picture of a rikishi eating chankonabe'
    },
    {
        image: 'https://i.imgur.com/ivJiiOs.jpg',
        description: 'a picture of a dohyo'
    },
    {
        image: 'https://i.imgur.com/9RfnLUZ.jpg',
        description: 'a picture of yokozuna kakuryu'
    },
    {
        image: 'https://i.imgur.com/Slqgb7o.jpg',
        description: 'a picture of a rikishi wearing a mawashi'
    },
]

// // selects current view
// function selectView() {
//     const currentView = STORE.currentView
//     $('section').hide()

//     switch (currentView) {
//         case 'intro':
//             $('#start-view').show()
//             break;
//         case 'question':
//             $('#question-view').show()
//             break;
//         case 'feedback':
//             $('#feedback-view').show()
//             break;
//         case 'final':
//             $('#final-view').show()
//             break;
//     }
// }

//start the quiz
function startQuiz() {
    $('.start-view').on('click', '.start-button', function (event) {
        event.preventDefault();
        $('.start-view').remove();
        $('#question-view').css('display', 'block')
        if (questionNumber < 6) {
            $('.question-counter').text(`Question: ${questionNumber + 1}/6`);
        }
    });
}


//generates the questions
function generateQuestion() {
    if (questionNumber < QUESTIONS.length) {
        return `<section class="css-question-list">
            <h2>Question: ${QUESTIONS[questionNumber].questionText}</h2>
            <ul>
                <form>
                    <fieldset>
                        <li>
                            <label name="question-answers">
                                <input type="radio" name="choice" value="${QUESTIONS[questionNumber].answers[0]}"
                                    required>
                                <span>${QUESTIONS[questionNumber].answers[0]}</span>
                            </label>
                        </li>
                        <li>
                            <label name="question-answers">
                                <input type="radio" name="choice" value="${QUESTIONS[questionNumber].answers[1]}"
                                    required>
                                <span>${QUESTIONS[questionNumber].answers[1]}</span>
                            </label>
                        </li>
                        <li>
                            <label name="question-answers">
                                <input type="radio" name="choice" value="${QUESTIONS[questionNumber].answers[2]}"
                                    required>
                                <span>${QUESTIONS[questionNumber].answers[2]}</span>
                            </label>
                        </li>
                        <li>
                            <label name="question-answers">
                                <input type="radio" name="choice" value="${QUESTIONS[questionNumber].answers[3]}"
                                    required>
                                <span>${QUESTIONS[questionNumber].answers[3]}</span>
                            </label>
                        </li>
                        <input class="answer-submit css-button" type="submit" value="Submit Your Answer">
                    </fieldset>
                </form>
            </ul>
        </section>`
    } else {
        renderResults();
    }
}

//render questions to the dom
function renderQuestion() {
    $('#question-view').html(generateQuestion());
}
//handles the user selection and submit for questions
function answerSelectedAndSubmitted() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        let userAnswer = $('input:checked');
        let answerToCheck = userAnswer.val();
        let correctAnswer = `${QUESTIONS[questionNumber].correctAnswer}`
        if (answerToCheck === correctAnswer) {
            questionAnsweredCorrect();
        } else {
            questionAnsweredIncorrect();
        }
    });
}

//will return results if answered correct
function questionAnsweredCorrect() {
    $('#question-view').html(`<section class="feedback">
    <p>You've got it right!</p>
    <div class="image-answers">
        <img class="image-answers" src="${imageStore[questionNumber].image}" alt="${imageStore[questionNumber].description}">
    </div>
    <button type="button" class="next-question css-button">Next Question</button>
</section>`)
    addScore();
    $('.score-counter').text(`Score: ${score}`);
    //console.log('Question was answered correct')
}
//will return incorrect answer screen
function questionAnsweredIncorrect() {
    $('#question-view').html(`<section class="feedback">    
    <p>You answered that incorrectly the correct answer would be ${QUESTIONS[questionNumber].correctAnswer}</p>
    <div class="image-answers">
        <img class="image-answers" src="${imageStore[questionNumber].image}" alt="${imageStore[questionNumber].description}">
    </div>
    <button type="button" class="next-question css-button">Next Question</button>
</section>`)

    //console.log('Answer is incorrect!')
}

//will render a question after the feedback
function renderNextQuestion() {
    $('body').on('click', '.next-question', function () {
        updateQuestionNumber();
        renderQuestion();
        answerSelectedAndSubmitted();
        if (questionNumber < 6) {
            updateQuestionCounter();
        }
        //consoleQuestionsArray();
        //console.log("Render Next Question fired")
    });
}

//this function should render the results of the entire quiz
function renderResults() {
    if (score < 6) {
        $('#question-view').html(`<section class="feedback">
        <p>The End! Your score was ${score} of 6. You can do better!</p>
        <button class="start-over css-button">START OVER</button>
        </section>`)
    } else {
        $('#question-view').html(`<section class="feedback">
        <p>You did perfect! You're worthy of the rank Yokozuna!</p>
        <button class="start-over css-button">START OVER</button>
    </section>`)
    }
}

//function to start quiz over
function startOver() {
    $('#question-view').on('click', '.start-over', function () {
        location.reload();
    });
}
//callback function to render DOM
function main() {
    startQuiz();
    renderQuestion();
    answerSelectedAndSubmitted();
    renderNextQuestion();
    startOver();
}

$(main);