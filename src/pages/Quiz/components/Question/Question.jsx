import { memo, useMemo } from "react";
import he from "he";
import styles from "./Question.module.css";
import { computeClass } from "./utils";

function Question({
  index,
  question,
  answers,
  correct_answer,
  chosen_answer,
  isGameActive,
  chooseAnswer,
  firstQuestionRef,
}) {
  const classesMap = useMemo(() => {
    const map = {};
    answers.forEach((answer) => {
      map[answer] = computeClass(
        styles,
        isGameActive,
        answer,
        correct_answer,
        chosen_answer,
      );
    });
    return map;
  }, [answers, isGameActive, correct_answer, chosen_answer]);

  return (
    <div className={styles.question} ref={firstQuestionRef} tabIndex={-1}>
      <h3 className={styles.title}>{he.decode(question)}</h3>
      <ul className={`${styles.answers} reset-list`}>
        {answers.map((answer) => {
          return (
            <li key={answer} className={styles["answer-item"]}>
              <button
                onClick={() => chooseAnswer(index, answer)}
                className={`${styles["answer"]} ${classesMap[answer]}`}
                aria-pressed={answer === chosen_answer}
              >
                {he.decode(answer)}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(Question);
