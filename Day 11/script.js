const quiz = [
  {
    question: "Q1) Who developed the Python language?",
    a: "Zim Den ",
    b: "Guido van Rossum  ",
    c: "Niene Stom  ",
    d: "Wick van Rossum  ",
    ans: "Guido van Rossum",
  },
  {
    question: " In which year was the Python language developed?",
    a: "English",
    b: "PHP",
    c: "C",
    d: "All of the above ",
    ans: " c",
  },
  {
    question:
      " Which one of the following is the correct extension of the Python file?",
    a: ".py",
    b: ".python",
    c: ".p",
    d: "None of above",
    ans: " .py",
  },
  {
    question: " Which of the following declarations is incorrect?",
    a: "_x = 2",
    b: "__x = 3",
    c: "__xyz__ = 5",
    d: "None of these ",
    ans: "None of these",
  },
  {
    question: "Which one of the following has the same precedence level?",
    a: "Division, Power, Multiplication, Addition and Subtraction",
    b: "Division and Multiplication",
    c: "Subtraction and Division ",
    d: "Power and Division ",
    ans: "Division and Multiplication",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quiz[questionCount];

  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false );
}









submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer === quiz[questionCount].ans){
      score++;

  };

  questionCount++;

  deselectAll();

  if(questionCount<quiz.length){
      loadQuestion();
  }else{
      showScore.innerHTML=`
      <h3> You Scored ${score}/${quiz.length} 👌</h3>
      <button class="btn" onclick="location.reload()"></button>`;
  }
  showScore.classList.remove('showArea');
});
