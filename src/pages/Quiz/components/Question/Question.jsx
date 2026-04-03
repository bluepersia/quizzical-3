import { memo } from "react";
import he from "he";
import styles from "./Question.module.css";
import Answer from "../Answer/Answer";

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
  return (
    <div className={styles.question} ref={firstQuestionRef} tabIndex={-1}>
      <h3 className={styles.title}>{he.decode(question)}</h3>
      <ul className={`${styles.answers} reset-list`}>
        {answers.map((answer) => {
          return (
            <li key={answer} className={styles["answer-item"]}>
              <Answer
                index={index}
                chooseAnswer={chooseAnswer}
                isGameActive={isGameActive}
                answer={answer}
                correct_answer={correct_answer}
                isSelected={answer === chosen_answer}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(Question);
