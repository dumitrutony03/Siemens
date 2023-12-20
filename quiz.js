import Question from './question.js';
import quizData from './quizData.js';

class Quiz {
  constructor() {
    // Make sure questions is an array of Question instances
    this.questions = quizData.map(quizData => new Question(quizData.id, quizData.question, quizData.choices, quizData.correctAnswers));
    
    // Make sure that the quiz starts from values equal to 0 everytime we reset.
    this.resetQuizApp();
  }

  resetQuizApp() {
    this.currentQuestionIndex = 0;
    this.userScore = 0;
  }

  /* 
    4.  Logic and Algorithm: •  
    Develop a JavaScript algorithm to randomly select quesons
    without repeang unl all quesons have been answered. 
  */

  /*
   Method to shuffle our questions, and the explanation:
  
  The shuffleQuestions method uses the Fisher-Yates shuffle algorithm to shuffle the array of questions randomly.
  It iterates through the array from the end to the beginning and, at each iteration, swaps the current element with a randomly selected element that comes before it.
  This process effectively shuffles the questions randomly.
  */
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  // Verify if the answers checked are the right ones
  areCorrect(selectedIndexes) {
    return Question.areCorrect(selectedIndexes);
  }

  // Take the question from 'currentQuestionIndex' position
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // Check if we still have questions left to answer
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    } else {
      return false;
    }
  }

  // Update the user score, based on the right answers
  updateUserScore(isCorrect) {
    if (isCorrect) 
      this.userScore++;
  }

  // Check if we passed through all the questions
  isQuizCompleted() {    
    return (this.currentQuestionIndex === this.questions.length);
  }

  // Return the user's score
  getUserScore() {
    return this.userScore;
  }

  // Return the total amount of questions, in our case := 50
  getTotalQuestions() {
    return this.questions.length;
  }

}
// Then we export out .js file, so we can access and use file's methods. 
export default Quiz;