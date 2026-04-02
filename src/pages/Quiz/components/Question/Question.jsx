import he from "he";
import styles from "./Question.module.css";

export default function Question({
  index,
  question,
  answers,
  correct_answer,
  chosen_answer,
  isGameActive,
  chooseAnswer,
}) {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{he.decode(question)}</h3>
      <ul className={`${styles.answers} reset-list`}>
        {answers.map((answer) => {
          let cls = "";

          if (isGameActive) {
            cls = styles["answer--active"];
            if (answer === chosen_answer) {
              cls += ` ${styles["answer--chosen"]}`;
            }
          } else {
            if (answer === correct_answer) {
              cls = styles["answer--correct"];
            } else if (answer === chosen_answer) {
              cls = styles["answer--incorrect"];
            }
          }

          return (
            <li key={answer} className={styles["answer-item"]}>
              <button
                onClick={() => chooseAnswer(index, answer)}
                className={`${styles["answer"]} ${cls}`}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
