function computeClass(
  styles,
  isGameActive,
  answer,
  correct_answer,
  chosen_answer,
) {
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
  return cls;
}

export { computeClass };
