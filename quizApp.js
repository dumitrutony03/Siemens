import Quiz from './quiz.js';

class QuizApp {
  constructor() {
    this.quiz = new Quiz();

    /*
    •  Design a web-based interface using HTML, CSS, and JavaScript.
    */

    // Have references from index.html components
    this.questionElement = document.getElementById('question');
    this.choicesElement = document.getElementById('choices');
    this.scoreElement = document.getElementById('score');
    this.submitButton = document.getElementById('submit-btn');

    // 'Submit Answer' button handler
    this.submitButton.addEventListener('click', () => this.handleAnswerSubmission());
    this.updateScore();

    this.resetButton = document.getElementById('reset-btn'); // Add this line
    this.resetButton.addEventListener('click', () => this.resetQuiz()); // Add this line

    // Check and show/hide the buttons
    this.updateButtonVisibility();

    this.startQuiz();
  }

  handleAnswerSubmission() {
    this.checkAnswer();
  }
  
  startQuiz() {
    this.quiz.shuffleQuestions();
    this.showQuestion();
  }  

  checkAnswer() {
    // Get the current question displayed in the FrontEnd
    const currentQuestion = this.quiz.getCurrentQuestion();

    // Get the checkBoxes the user has checked 
    const selectedIndexes = this.getSelectedIndexes();
    
    // Check if the user has selected any option
    if (selectedIndexes.length === 0) {
      alert("Please select at least one answer before submitting.");
      return;
    }
    
    // Verifiy if the user has made good choices when he checked the answers
    const isCorrect = currentQuestion.areCorrect(selectedIndexes);

    // We update the user's score
    this.quiz.updateUserScore(isCorrect);

    // Update the Frontend user's score 
    this.updateScore();

    // If we still have questions left to be answered
    if (this.quiz.nextQuestion()) {
      this.showQuestion();
    } else {
      // To show/hide the Submit button
      this.updateButtonVisibility();
      this.showResult();
    }
  }

  showQuestion() {

    /* 
    
    The interface should display a random question from the pool with multiple-choice options.
    
    */

    // We display the question together with it's answers

    // Get the current question
    const currentQuestion = this.quiz.getCurrentQuestion();
    // We show it in the FrontEnd
    this.questionElement.textContent = currentQuestion.question;

    // Restart everytime the answers list, to display the new ones
    this.choicesElement.innerHTML = '';

    // We iterate through our choices := 4
    currentQuestion.choices.forEach((choice, index) => {
      // Create a list of 'input' type, and make it a list of 'checkboxes'
      const li = document.createElement('li');
      const input = document.createElement('input');
      // Change input type to checkbox
      input.type = 'checkbox';
      input.id = `choice-${index}`;

      // To each element from LIST, we append the checkbox 
      li.appendChild(input);

      // Assign to every checkbox element, a label to know what
      // is the possible answer
      const label = document.createElement('label');
      label.textContent = choice;

      label.setAttribute('for', `choice-${index}`);
      li.appendChild(label);

      // Every element of type 'li', we append it as child to form a bigger list, inside de 'ul' component
      this.choicesElement.appendChild(li);
    });
  }


  /* Users can select an opon and submit their answer.*/

  // We have to check if the user has checked any checkboxes
  getSelectedIndexes() {
    // Take all the checkboxes from 'ul' -> 'li'
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedIndexes = [];

    checkboxes.forEach((checkbox, index) => {
      // Verify if the answers are checked <=> out checkboxes are checked 
      if (checkbox.checked) {
        selectedIndexes.push(index);
      }
    });
    // We then make a list of checked checkboxes, and verify if the user has chosen the right answers
    return selectedIndexes;
  }

  Submit_Reset_BtnVisibility() {
    return this.quiz.isQuizCompleted();
  }

  updateButtonVisibility() {
    // Check if the quiz is completed
    const isQuizCompleted = this.Submit_Reset_BtnVisibility();
    console.log(isQuizCompleted);

    this.submitButton.style.display = isQuizCompleted ? 'none' : 'block';
    this.resetButton.style.display = isQuizCompleted ? 'block' : 'none';
  }

  /*
  3.  Scoring System: 
  •  Implement a scoring system to calculate the user's score based on correct answers. 
  •  Show the user's score aer compleng the quiz.
  */

  updateScore() {
    // Update the UI everytime we have passed a Question
    this.scoreElement.textContent = `Score: ${this.quiz.getUserScore()}/${this.quiz.getTotalQuestions()}`;
  }

  showResult() {
    this.questionElement.textContent = 'Quiz Completed!';
    this.choicesElement.innerHTML = '';
    this.scoreElement.textContent = `Your Score: ${this.quiz.getUserScore()} out of ${this.quiz.questions.length}`;
     
    // If we finished the Quiz (meaning that we have passed through all the questions, we can play with our 'Submit Answer' and 'Reset Quiz' buttons), 
    this.submitButton.style.display = 'none';
    this.resetButton.style.display = 'block';
  }

  resetQuiz() {
    // We reset the quiz
    this.quiz.reset();

    // Add this line to update the score after reset
    this.updateScore();

    // We shuffle again the questions
    this.quiz.shuffleQuestions();

    // This line displays the first question after reset
    this.showQuestion();

    // We show/hide the submit button
    this.updateButtonVisibility();
  }

}
// const quizApp = new QuizApp();

export default QuizApp;