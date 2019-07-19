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
        correctAnswer: '3'
    },
    {
        questionText: "What is the name of the belt a sumo wrestler wears?",
        answers: ['Gendai budo', 'Mawashi', 'Rikishi', 'Kimarite'],
        correctAnswer: '3'
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

function main() {
    //selectView();
}

$(main);