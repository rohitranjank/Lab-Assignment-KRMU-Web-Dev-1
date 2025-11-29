// Simple Quiz Game
const questions = [
  { question: "Who is the PM of India?", answer: "narendra modi" },
  { question: "Which planet is known as the blue Planet?", answer: "earth" },
  { question: "What is 61 + 39?", answer: "100" },
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "How many number of continents in the world?", answer: "7" }
];

function normalize(text) {
  return (text === null) ? "" : String(text).trim().toLowerCase();
}

function isCorrect(userInput, correctAnswer) {
  const normalizedUser = normalize(userInput);
  if (Array.isArray(correctAnswer)) {
    return correctAnswer.map(a => normalize(a)).includes(normalizedUser);
  } else {
    return normalize(correctAnswer) === normalizedUser;
  }
}

function askQuestion(qObj, index, total) {
  const promptText = `Question ${index + 1} of ${total}:\n${qObj.question}`;
  const userResponse = prompt(promptText);
  if (userResponse === null) {
    alert("No answer entered. Moving on.");
    return false;
  }
  const correct = isCorrect(userResponse, qObj.answer);
  if (correct) {
    alert("Correct!");
  } else {
    const correctDisplay = Array.isArray(qObj.answer) ? qObj.answer.join(", ") : qObj.answer;
    alert(`Incorrect. The correct answer is: ${correctDisplay}`);
  }
  return correct;
}

function runQuiz(questionArray) {
  if (!Array.isArray(questionArray) || questionArray.length === 0) {
    console.error("No questions provided.");
    return;
  }
  let score = 0;
  const total = questionArray.length;
  for (let i = 0; i < total; i++) {
    const q = questionArray[i];
    const correct = askQuestion(q, i, total);
    if (correct) score++;
  }
  const percent = Math.round((score / total) * 100);
  alert(`Quiz finished!\nYour score: ${score} / ${total} (${percent}%)`);
  console.log(`Quiz results: ${score}/${total} (${percent}%)`);
}

runQuiz(questions);
