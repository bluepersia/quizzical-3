import { useState, useEffect, useRef } from "react";
import styles from "./Quiz.module.css";
import Btn from "../../components/Btn/Btn";
import Question from "./components/Question/Question";
import { calculateScore, chooseAnswer, shuffleArray } from "./utils";

export default function Quiz() {
  const [isEnded, setIsEnded] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const quizDataPrev = useRef(null);
  const firstQuestionRef = useRef(null);

  function toggleGame() {
    setIsEnded((prev) => !prev);
    if (isEnded) {
      setQuizData(null);
    }
  }

  function handleChooseAnswer(index, answer) {
    setQuizData((prev) => chooseAnswer(prev, index, answer));
  }

  useEffect(() => {
    if (isEnded) {
      return;
    }

    tryFetch();

    function tryFetch() {
      fetch("https://opentdb.com/api.php?amount=5")
        .then((res) => {
          if (res.status === 429) {
            throw new Error("RATE_LIMIT");
          }
          return res.json();
        })
        .then((data) => {
          if (!data.results) return;
          setQuizData(
            data.results.map((questionData, index) => ({
              index,
              ...questionData,
              chosen_answer: "",
              answers: shuffleArray([
                questionData.correct_answer,
                ...questionData.incorrect_answers,
              ]),
            })),
          );
        })
        .catch(() => {
          setTimeout(tryFetch, 2000);
        });
    }
  }, [isEnded]);

  useEffect(() => {
    if (quizData && quizDataPrev.current === null) {
      firstQuestionRef.current.focus();
    }
    quizDataPrev.current = quizData;
  }, [quizData]);

  return (
    <>
      <section className={styles.quiz}>
        <h2 className="sr-only">Questions</h2>
        <ul className="reset-list">
          {quizData?.map((questionData, index) => (
            <li key={questionData.question}>
              <Question
                firstQuestionRef={index === 0 ? firstQuestionRef : null}
                {...questionData}
                isGameActive={!isEnded}
                chooseAnswer={handleChooseAnswer}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.results}>
        <h2 className="sr-only">Results</h2>
        {isEnded ? (
          <>
            <p className={styles.score}>
              You scored {calculateScore(quizData)}/{quizData.length} correct
              answers
            </p>
            <Btn variant="mid" onClick={toggleGame}>
              Play again
            </Btn>
          </>
        ) : (
          <Btn variant="mid" onClick={toggleGame}>
            Check answers
          </Btn>
        )}
      </section>
    </>
  );
}
