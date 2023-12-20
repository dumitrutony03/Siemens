import Quiz from './quiz.js';

class QuizApp {
  constructor() {
    this.quiz = new Quiz();
    this.questionElement = document.getElementById('question');
    this.choicesElement = document.getElementById('choices');
    this.scoreElement = document.getElementById('score');
    this.submitButton = document.getElementById('submit-btn');

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

  showQuestion() {
    const currentQuestion = this.quiz.getCurrentQuestion();

    this.questionElement.textContent = currentQuestion.question;

    this.choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice, index) => {
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.type = 'checkbox'; // Change input type to checkbox
      input.id = `choice-${index}`;
      li.appendChild(input);
      const label = document.createElement('label');
      label.textContent = choice;
      label.setAttribute('for', `choice-${index}`);
      li.appendChild(label);

      this.choicesElement.appendChild(li);
    });
  }

  checkAnswer() {
    const currentQuestion = this.quiz.getCurrentQuestion();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedIndexes = Array.from(checkboxes).map(checkbox => parseInt(checkbox.id.replace('choice-', ''), 10));

    const isCorrect = currentQuestion.areCorrect(selectedIndexes);

    this.quiz.updateUserScore(isCorrect);

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