import styles from "./Quiz.module.css";
import Btn from "../../components/Btn/Btn";
import Question from "./components/Question";

export default function Quiz() {
  return (
    <>
      <section className={styles.quiz}>
        <h2 className="sr-only">Questions</h2>
        <ul className="reset-list">
          <li>
            <Question />
          </li>

          <li>
            <Question />
          </li>

          <li>
            <Question />
          </li>

          <li>
            <Question />
          </li>

          <li>
            <Question />
          </li>
        </ul>
      </section>
      <section className={styles.results}>
        <h2 className="sr-only">Results</h2>
        <p className={styles.score}>You scored 3/5 correct answers</p>
        <Btn variant="mid">Play again</Btn>
      </section>
    </>
  );
}
