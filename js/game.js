const question=document.querySelector('#question');
const choices=Array.from(document.querySelectorAll('.choice-text'));
const progressText=document.querySelector('#progressText');
const scoreText=document.querySelector('#score');
const progressBarFull=document.querySelector('#progressBarFull');

let currentQuestion={};
let acceptingAnswers=true;
let score=0;
let questionCounter=0;
let availableQuestions=[];

let questions=[
    {
        question:"Where is the longest raceroad in the world?",
        choice1:"germany",
        choice2:"china",
        choice3:"USA",
        choice4:"the united arab",
        answer:1
    },
    {
        question:"What is the fastest racecar in the world 2021?",
        choice1:"Ferrari California",
        choice2:"Lambrghini Huracan",
        choice3:"Bugatti Chiron",
        choice4:"Tesla Roadster",
        answer:3
    },
    {
        question:"who is the best racing driver in the world?",
        choice1:"Andy Green",
        choice2:"Brian Hutton",
        choice3:"John Fuller",
        choice4:"Paul j Geller",
        answer:1
    },
    {
        question:"which car has the faster acceleration from 0 to 100 kph 2021?",
        choice1:"Audi R18",
        choice2:"Nissan GT-R",
        choice3:"Rimac Nevera",
        choice4:"Tesla Roadster",
        answer:4
    },
]

const SCORE_POINTS=100;
const MAX_QUESTIONS=4;

startGame=()=>{
    questionCounter=0;
    score=0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion=()=>{
    if(availableQuestions.length===0 || questionCounter>MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText=`Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width=`${(questionCounter/MAX_QUESTIONS) *100}%`

    const questionsIndex=Math.floor(Math.random()*availableQuestions.length)
    currentQuestion=availableQuestions[questionsIndex]
    question.innerText=currentQuestion.question

    choices.forEach(choice => {
        const number=choice.dataset['number']
        choice.innerText=currentQuestion['choice' + number];
    })
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers=true;
}

choices.forEach(choice=>{
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return

        acceptingAnswers=false;
        const selectedChoice=e.target;
        const selectedAnswer=selectedChoice.dataset['number']

        let classToApply =selectedAnswer==currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply==='correct'){
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

       setTimeout(()=> {
           selectedChoice.parentElement.classList.remove(classToApply);
           getNewQuestion();
       }, 1000) 
    })
})

incrementScore=num=>{
    score+=num
    scoreText.innerText=score
}
startGame();