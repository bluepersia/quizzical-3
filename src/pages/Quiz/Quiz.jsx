import Btn from "../../components/Btn/Btn";
import Question from "./components/Question";

export default function Quiz() {
  return (
    <>
      <section>
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
      <section>
        <h2 className="sr-only">Results</h2>
        <Btn variant="mid">Check answers</Btn>
      </section>
    </>
  );
}
