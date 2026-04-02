function shuffleArray(arr) {
  const array = [...arr]; // optional: avoid mutating original

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function chooseAnswer(prevQuizData, index, answer) {
  return prevQuizData.map((questionData, i) =>
    index === i ? { ...questionData, chosen_answer: answer } : questionData,
  );
}

function calculateScore(quizData) {
  return quizData.reduce(
    (prev, curr) =>
      curr.chosen_answer === curr.correct_answer ? prev + 1 : prev,
    0,
  );
}

export { shuffleArray, chooseAnswer, calculateScore };
