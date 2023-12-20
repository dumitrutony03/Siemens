import Question from './question.js';
import questionsData from './quizData.js';

class Quiz {
  constructor() {
    // Make sure questions is an array of Question instances
    this.questions = questionsData.map(questionData => new Question(questionData.id, questionData.question, questionData.choices, questionData.correctAnswers));
    this.currentQuestionIndex = 0;
    this.userScore = 0;
  }

  reset() {
    this.currentQuestionIndex = 0;
    this.userScore = 0;
  }

  // Method to shuffle our questions.
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  areCorrect(selectedIndexes) {
    return Question.areCorrect(selectedIndexes);
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    } else {
      return false;
    }
  }

  updateUserScore(isCorrect) {
    if (isCorrect) 
      this.userScore++;
  }

  isQuizCompleted() {    
    return (this.currentQuestionIndex === this.questions.length);
  }

  getUserScore() {
    return this.userScore;
  }

  getTotalQuestions() {
    return this.questions.length;
  }
}
export default Quiz;