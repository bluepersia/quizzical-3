import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>Quizzical</h1>
      <p className={styles.description}>
        Test your knowledge with quick, fun quizzes.
      </p>
      <button className={styles.button}>Start Quiz</button>
    </div>
  );
}
