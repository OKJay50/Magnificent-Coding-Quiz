// script.js
const questions = [
    {
      question: "What is the result of 2 + 2?",
      choices: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      question: "What keyword is used to declare a variable?",
      choices: ["var", "let", "const", "both var and let"],
      correctAnswer: "both var and let"
    },
    {
      question: "What is the output of the following code?\nconsole.log(typeof 42);",
      choices: ["number", "string", "boolean", "undefined"],
      correctAnswer: "number"
    },
    {
      question: "Which of the following methods can be used to convert a string to an integer in JavaScript?",
      choices: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
      correctAnswer: "parseInt()"
    },
    {
      question: "What does the CSS acronym stand for?",
      choices: ["Cascading Style Sheets", "Cascading Style Syntax", "Creative Style Sheets", "Cascading Sheet Styles"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML element is used to define an unordered list?",
      choices: ["<ul>", "<ol>", "<li>", "<list>"],
      correctAnswer: "<ul>"
    },
    {
      question: "What is the correct syntax for referring to an external JavaScript file?",
      choices: ["<script src='script.js'>", "<javascript src='script.js'>", "<js src='script.js'>", "<srcipt src='script.js'>"],
      correctAnswer: "<script src='script.js'>"
    },
    {
      question: "What is the purpose of the 'DOMContentLoaded' event in JavaScript?",
      choices: ["It is triggered when the page is loaded", "It is triggered when the DOM tree is fully constructed", "It is triggered when a form is submitted", "It is triggered when an API request is completed"],
      correctAnswer: "It is triggered when the DOM tree is fully constructed"
    },
    {
      question: "Which of the following is an example of an inline CSS style?",
      choices: ["<style> tag", "style attribute in HTML element", "external CSS file", "CSS class selector"],
      correctAnswer: "style attribute in HTML element"
    },
    {
      question: "What is the purpose of the fetch() function in JavaScript?",
      choices: ["To make asynchronous API requests", "To manipulate DOM elements", "To perform arithmetic calculations", "To add event listeners"],
      correctAnswer: "To make asynchronous API requests"
    },
    {
      question: "Which of the following is NOT a valid way to declare a function in JavaScript?",
      choices: ["function myFunction() {}", "var myFunction = function() {}", "const myFunction = () => {}", "let myFunction = function() {}"],
      correctAnswer: "var myFunction = function() {}"
    },
    {
      question: "Which CSS property is used to change the background color of an element?",
      choices: ["color", "background-color", "background", "background-image"],
      correctAnswer: "background-color"
    },
    {
      question: "What is the purpose of the <canvas> element in HTML?",
      choices: ["To display images", "To create interactive forms", "To play audio files", "To draw graphics dynamically"],
      correctAnswer: "To draw graphics dynamically"
    },
    {
      question: "Which method can be used to add a new element at the end of an array in JavaScript?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()"
    },
    {
      question: "Which HTML attribute is used to specify custom CSS styles for an element?",
      choices: ["class", "style", "id", "data-style"],
      correctAnswer: "style"
    },
    {
      question: "What is the purpose of the event.preventDefault() method in JavaScript?",
      choices: ["To prevent the default behavior of an event", "To stop the event from bubbling up the DOM tree", "To pause the execution of JavaScript code", "To cancel an ongoing API request"],
      correctAnswer: "To prevent the default behavior of an event"
    }
  ];
  
  
  const timerDuration = 60; // seconds
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeRemaining = timerDuration;
  
  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  document.body.appendChild(startButton);
  startButton.addEventListener("click", startQuiz);
  
  function startQuiz() {
    startButton.remove();
    displayQuestion();
    startTimer();
  }
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuestion = questions[currentQuestionIndex];
  
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
  
    currentQuestion.choices.forEach(choice => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", handleAnswer);
      choicesElement.appendChild(li);
    });
  }
  
  function handleAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    } else {
      timeRemaining -= 10; // Subtract 10 seconds for incorrect answer
      if (timeRemaining < 0) {
        timeRemaining = 0;
      }
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
  
  function startTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = formatTime(timeRemaining);
  
    timer = setInterval(() => {
      timeRemaining--;
      timerElement.textContent = formatTime(timeRemaining);
  
      if (timeRemaining <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
  
  function endQuiz() {
    clearInterval(timer);
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = score.toString();
    document.getElementById("save-btn").addEventListener("click", saveScore);
  }
  
  function saveScore() {
    const initials = document.getElementById("initials").value;
    // TODO: Implement score saving logic (e.g., using an API or local storage)
  }
  
