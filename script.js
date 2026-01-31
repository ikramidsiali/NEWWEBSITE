const landingPage= document.querySelector(".landing");
const Vocabulary= document.querySelector(".vocabulary");
const letters= document.querySelector(".letters");
const Astronomy= document.querySelector(".Astronomy");
const Politics= document.querySelector(".Politics");
const HouseChores= document.querySelector(".HouseChores");
const Death= document.querySelector(".Death");
const Religion= document.querySelector(".Religion");
const Geography= document.querySelector(".Geography");
const Travel= document.querySelector(".Travel");
const Law= document.querySelector(".Law");
const Money= document.querySelector(".Money");
const Society= document.querySelector(".Society");
const Speaking= document.querySelector(".speaking");
const Grammar= document.querySelector(".grammar");
const testGrammar= document.querySelector(".testOfGrammar");
const learning= document.querySelector(".learnings");
const Varieties= document.querySelector(".Variety");
const color= document.querySelector(".colors");
const organ= document.querySelector(".organs");
const fruit= document.querySelector(".fruits");
const vegetable= document.querySelector(".vegetables");
const food= document.querySelector(".foods");
const health= document.querySelector(".Health");
const weather= document.querySelector(".Weather");
const job= document.querySelector(".jobs");
const math= document.querySelector(".maths");
const kitchen= document.querySelector(".kitchenTools");
const clothes= document.querySelector(".Clothes");
const home= document.querySelector(".homes");
const familyMember= document.querySelector(".familyMembers");
const school= document.querySelector(".schools");
const animal= document.querySelector(".animals");
const publicPlaces= document.querySelector(".publicPlace");
const Nature= document.querySelector(".nature");
const road= document.querySelector(".roads");
const sport= document.querySelector(".sports");
const calendar= document.querySelector(".calendars");
const emotion= document.querySelector(".emotions");
const celebration= document.querySelector(".celebrations");
const electronic= document.querySelector(".electronics");
const tool= document.querySelector(".tools");
const Baby= document.querySelector(".Baby");


function seeCategory(getCategory)  {
    landingPage.classList.add("hide");
    getCategory.classList.remove("hide"); }

    
function showCategory(getCategory)  {
    Vocabulary.classList.add("hide");
    getCategory.classList.remove("hide"); }

function gotoHome()  {
    landingPage.classList.remove("hide"); 
    Vocabulary.classList.add("hide");
    Speaking.classList.add("hide");
    Grammar.classList.add("hide");
    Money.classList.add("hide");
    Society.classList.add("hide");
    letters.classList.add("hide");
    color.classList.add("hide");
    organ.classList.add("hide");
    fruit.classList.add("hide");
    vegetable.classList.add("hide");
    food.classList.add("hide");
    weather.classList.add("hide");
    calendar.classList.add("hide");
    animal.classList.add("hide");
    kitchen.classList.add("hide"); 
    health.classList.add("hide");
    Nature.classList.add("hide");
    clothes.classList.add("hide");
    home.classList.add("hide");
    familyMember.classList.add("hide");
    sport.classList.add("hide");
    job.classList.add("hide");
    road.classList.add("hide");
    math.classList.add("hide");
    school.classList.add("hide");
    publicPlaces.classList.add("hide");
    emotion.classList.add("hide");
    celebration.classList.add("hide");
    tool.classList.add("hide");
    electronic.classList.add("hide");
    Varieties.classList.add("hide");
    learning.classList.add("hide");
    testGrammar.classList.add("hide");
    Astronomy.classList.add("hide");
    Baby.classList.add("hide");
    Death.classList.add("hide");
    Religion.classList.add("hide");
    HouseChores.classList.add("hide");
    Politics.classList.add("hide");
    Travel.classList.add("hide");
    Law.classList.add("hide");
    Geography.classList.add("hide");
}

function gotoVocabulary()  {
    landingPage.classList.add("hide"); 
    Money.classList.remove("hide");
    letters.classList.remove("hide");
    Vocabulary.classList.remove("hide");
    Society.classList.add("hide");
    Baby.classList.add("hide");
    color.classList.add("hide");
    organ.classList.add("hide");
    fruit.classList.add("hide");
    vegetable.classList.add("hide");
    food.classList.add("hide");
    weather.classList.add("hide");
    calendar.classList.add("hide");
    animal.classList.add("hide");
    kitchen.classList.add("hide"); 
    health.classList.add("hide");
    Nature.classList.add("hide");
    clothes.classList.add("hide");
    home.classList.add("hide");
    familyMember.classList.add("hide");
    sport.classList.add("hide");
    job.classList.add("hide");
    road.classList.add("hide");
    math.classList.add("hide");
    school.classList.add("hide");
    publicPlaces.classList.add("hide");
    emotion.classList.add("hide");
    celebration.classList.add("hide");
    tool.classList.add("hide");
    electronic.classList.add("hide");
    Astronomy.classList.add("hide");
    Death.classList.add("hide");
    Religion.classList.add("hide");
    HouseChores.classList.add("hide");
    Politics.classList.add("hide");
    Travel.classList.add("hide");
    Law.classList.add("hide");
    Geography.classList.add("hide");
}


const myQuestions = [
    {
      question: "What is the meaning of the word 'Bliss' ?",
      answers: 
      {
        a: "a school supply",
        b: "an animal",
        c: "Happiness",
        d: "Sadness",
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: 
      {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: 
      {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    
    {
        question: "Which tool can you use to ensure code quality?",
        answers: 
        {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: 
        {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: 
        {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  function buildQuiz() 
  {
    const output = [];
    myQuestions.forEach
    ( (currentQuestion, questionNumber) => 
        {
          const answers = [];
          for(letter in currentQuestion.answers)
          {
            // ...add an HTML radio button
            answers.push
            (
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          // add this question and its answers to the output
          output.push
          (
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            <div class="right">The correct answer is: ${currentQuestion.correctAnswer} </div>`
          );
        }
    );
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

   function showResults()
  {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const questionContainers = quizContainer.querySelectorAll('.question');
    const riiight = quizContainer.querySelectorAll('.right');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        questionContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        questionContainers[questionNumber].style.color = 'red';
        riiight[questionNumber].style.color = 'blue';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  buildQuiz();
  submitButton.addEventListener('click', showResults);




















  