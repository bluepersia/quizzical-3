import he from "he";
import { memo } from "react";
import styles from "./Answer.module.css";
import { computeClass } from "../Question/utils";

function Answer({
  chooseAnswer,
  index,
  isGameActive,
  answer,
  correct_answer,
  isSelected,
}) {
  const cls = computeClass(
    styles,
    isGameActive,
    answer,
    correct_answer,
    isSelected,
  );
  return (
    <button
      disabled={!isGameActive}
      onClick={() => chooseAnswer(index, answer)}
      className={`${styles["answer"]} ${cls}`}
      aria-pressed={isSelected}
    >
      {he.decode(answer)}
    </button>
  );
}

export default memo(Answer);
