import styles from "./Question.module.css";

export default function Question() {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>Question</h3>
      <ul className={`${styles.answers} reset-list`}>
        <li className={styles["answer-item"]}>
          <button className={`${styles["answer"]} ${styles["answer--active"]}`}>
            Answer
          </button>
        </li>
        <li className={styles["answer-item"]}>
          <button
            className={`${styles["answer"]} ${styles["answer--correct"]}`}
          >
            Answer
          </button>
        </li>
        <li className={styles["answer-item"]}>
          <button
            className={`${styles["answer"]} ${styles["answer--incorrect"]}`}
          >
            Answer
          </button>
        </li>
        <li className={styles["answer-item"]}>
          <button className={styles["answer"]}>Answer</button>
        </li>
      </ul>
    </div>
  );
}
