// question.js

class Question {
  constructor(id, question, choices, correctAnswers) {
    this.id = id;
    this.question = question;
    this.choices = choices;
    this.correctAnswers = correctAnswers;
  }

  areCorrect(selectedIndexes) {
    // Compare selected indexes with correct answers
    const correctIndexes = this.correctAnswers.map(answer => answer - 1); // Adjust to 0-based index

    if (selectedIndexes.length !== correctIndexes.length) {
      return false; // Incorrect if the number of selected choices is not the same as correct answers
    }

    for (const selectedIndex of selectedIndexes) {
      if (!correctIndexes.includes(selectedIndex)) {
        return false; // Incorrect if any selected index is not among correct answers
      }
    }
    return true; // All selected indexes are correct
  }
}
export default Question;
