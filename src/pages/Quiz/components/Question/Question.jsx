import he from "he";
import styles from "./Question.module.css";
import { computeClass } from "./utils";

export default function Question({
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
          const cls = computeClass(
            styles,
            isGameActive,
            answer,
            correct_answer,
            chosen_answer,
          );
          return (
            <li key={answer} className={styles["answer-item"]}>
              <button
                onClick={() => chooseAnswer(index, answer)}
                className={`${styles["answer"]} ${cls}`}
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
