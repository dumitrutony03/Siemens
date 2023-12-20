const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswers: [3]  // Indexed from 1
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswers: [2]
  },
  {
    id: 3,
    question: "Which programming language is known for its use in web development?",
    choices: ["Java", "Python", "JavaScript", "C++"],
    correctAnswers: [3]
  },
  {
    id: 4,
    question: "Which planets are considered gas giants?",
    choices: ["Mars", "Jupiter", "Saturn", "Earth"],
    correctAnswers: [2, 3]
  },
  {
    id: 5,
    question: "What is the value of π (pi) to two decimal places?",
    choices: ["3.14", "3.16", "3.12", "3.18"],
    correctAnswers: [1]
  },
  {
    id: 6,
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Fe", "Cu"],
    correctAnswers: [1]
  },
  {
    id: 7,

    question: "What is the square root of 64?",
    choices: ["8", "6", "10", "4"],
    correctAnswers: [1]
  },
  {
    id: 8,
    question: "What is the value of 2 to the power of 5?",
    choices: ["16", "32", "64", "128"],
    correctAnswers: [2]
  },
  {
    id: 9,
    question: "What is the value of the mathematical constant 'e' (Euler's number)?",
    choices: ["2.71", "3.14", "1.62", "2.5"],
    correctAnswers: [1]
  },
  {
    id: 10,
    question: "What is the chemical symbol for water?",
    choices: ["W", "H2O", "O2", "CO2"],
    correctAnswers: [2]
  },
  {
    id: 11,
    question: "What is the area of a square with a side length of 8 units?",
    choices: ["32 sq units", "64 sq units", "128 sq units", "16 sq units"],
    correctAnswers: [1]
  },
  {
    id: 12,
    question: "Which gas is known as the 'laughing gas'?",
    choices: ["Oxygen", "Nitrous Oxide", "Helium", "Carbon Dioxide"],
    correctAnswers: [2]
  },
  {
    id: 13,
    question: "Which organ in the human body produces insulin?",
    choices: ["Liver", "Pancreas", "Kidney", "Stomach"],
    correctAnswers: [2]
  },
  {
    id: 14,
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswers: [2]
  },
  {
    id: 15,
    question: "What is the sum of the angles in a triangle?",
    choices: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    correctAnswers: [2]
  },
  {
    id: 16,
    question: "What is the largest mammal on Earth?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswers: [2]
  },
  {
    id: 17,
    question: "Which planet is known as the 'Blue Planet'?",
    choices: ["Mars", "Earth", "Neptune", "Uranus"],
    correctAnswers: [2]
  },
  {
    id: 18,
    question: "What is the value of the square root of 100?",
    choices: ["5", "10", "7", "12"],
    correctAnswers: [2]
  },
  {
    id: 19,
    question: "Which gas is responsible for the color of the Earth's sky?",
    choices: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    correctAnswers: [1, 2]
  },
  {
    id: 20,
    question: "What is the value of 5 factorial (5!)?",
    choices: ["20", "120", "60", "240"],
    correctAnswers: [2]
  },
  {
    id: 21,
    question: "What is the smallest particle of an element that retains its properties?",
    choices: ["Molecule", "Cell", "Atom", "Electron"],
    correctAnswers: [3]
  },
  {
    id: 22,
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswers: [2]
  },
  {
    id: 23,
    question: "What is the value of 2 to the power of 8?",
    choices: ["128", "256", "512", "1024"],
    correctAnswers: [2]
  },
  {
    id: 24,
    question: "What is the process by which plants make their own food?",
    choices: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
    correctAnswers: [1]
  },
  {
    id: 25,
    question: "What is the value of the square root of 25?",
    choices: ["5", "10", "7", "12"],
    correctAnswers: [1]
  },
  {
    id: 26,
    question: "Which gas is known as the 'silent killer' due to its colorless and odorless nature?",
    choices: ["Oxygen", "Carbon Monoxide", "Methane", "Hydrogen"],
    correctAnswers: [2]
  },
  {
    id: 27,
    question: "What is the chemical symbol for the element potassium?",
    choices: ["P", "K", "Po", "Pt"],
    correctAnswers: [2]
  },
  {
    id: 28,
    question: "Which ancient civilization built the pyramids at Giza?",
    choices: ["Greek", "Roman", "Egyptian", "Babylonian"],
    correctAnswers: [3]
  },
  {
    id: 29,
    question: "If a triangle has angles measuring 45 degrees and 45 degrees, what is the measure of the third angle?",
    choices: ["45 degrees", "90 degrees", "135 degrees", "180 degrees"],
    correctAnswers: [2]
  },
  {
    id: 30,
    question: "Which metal is liquid at room temperature?",
    choices: ["Gold", "Mercury", "Aluminum", "Copper"],
    correctAnswers: [2]
  },
  {
    id: 31,
    question: "What is the value of 3 squared (3^2)?",
    choices: ["6", "9", "12", "15"],
    correctAnswers: [2]
  },
  {
    id: 32,
    question: "Which planet is known as the 'Ringed Planet'?",
    choices: ["Mars", "Jupiter", "Saturn", "Uranus"],
    correctAnswers: [3]
  },
  {
    id: 33,
    question: "What is the largest mammal on land?",
    choices: ["African elephant", "Hippopotamus", "Giraffe", "Rhinoceros"],
    correctAnswers: [1]
  },
  {
    id: 34,
    question: "What is the value of 4 cubed (4^3)?",
    choices: ["16", "64", "256", "512"],
    correctAnswers: [2]
  },
  {
    id: 35,
    question: "What is the value of 7 multiplied by 11?",
    choices: ["66", "77", "88", "99"],
    correctAnswers: [2]
  },
  {
    id: 36,
    question: "If x - 8 = 2, what is the value of x?",
    choices: ["6", "8", "10", "12"],
    correctAnswers: [3]
  },
  {
    id: 37,
    question: "What is the value of 5 factorial (5!)?",
    choices: ["20", "120", "60", "240"],
    correctAnswers: [2]
  },
  {
    id: 38,
    question: "What is the value of the square root of 81?",
    choices: ["7", "8", "9", "10"],
    correctAnswers: [3]
  },
  {
    id: 39,
    question: "If x + 5 = 10, what is the value of x?",
    choices: ["2", "5", "7", "10"],
    correctAnswers: [2]
  },
  {
    id: 40,
    question: "What is the value of 12 divided by 3?",
    choices: ["3", "4", "6", "8"],
    correctAnswers: [2]
  },
  {
    id: 41,
    question: "What is the value of 12 divided by 4?",
    choices: ["3", "4", "6", "8"],
    correctAnswers: [1]
  },
  {
    id: 42,
    question: "What is the value of 75 divided by 5?",
    choices: ["3", "4", "15", "8"],
    correctAnswers: [3]
  }, {
    id: 43,
    question: "What is the value of 75 divided by 3?",
    choices: ["3", "4", "25", "8"],
    correctAnswers: [3]
  },
  {
    id: 44,
    question: "What is the value of 100 divided by 5?",
    choices: ["3", "4", "20", "8"],
    correctAnswers: [3]
  }, {
    id: 45,
    question: "What is the value of 100 divided by 20?",
    choices: ["3", "4", "5", "8"],
    correctAnswers: [3]
  }, {
    id: 46,
    question: "What is the value of 100 divided by 25?",
    choices: ["3", "4", "5", "8"],
    correctAnswers: [2]
  }, {
    id: 47,
    question: "What is the value of 125 divided by 25?",
    choices: ["3", "5", "3", "8"],
    correctAnswers: [2]
  },
  {
    id: 48,
    question: "What is the value of 200 divided by 10?",
    choices: ["3", "5", "3", "20"],
    correctAnswers: [4]
  }, {
    id: 49,
    question: "What is the value of 3!(Factorial)?",
    choices: ["6", "5", "3", "20"],
    correctAnswers: [1]
  }, {
    id: 50,
    question: "What is the value of 0!(Factorial)?",
    choices: ["6", "5", "3", "1"],
    correctAnswers: [4]
  },
];

export default questionsData;