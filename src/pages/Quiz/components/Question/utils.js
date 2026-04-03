function computeClass(
  styles,
  isGameActive,
  answer,
  correct_answer,
  isSelected,
) {
  let cls = "";

  if (isGameActive) {
    cls = styles["answer--active"];
    if (isSelected) {
      cls += ` ${styles["answer--chosen"]}`;
    }
  } else {
    if (answer === correct_answer) {
      cls = styles["answer--correct"];
    } else if (isSelected) {
      cls = styles["answer--incorrect"];
    }
  }
  return cls;
}

export { computeClass };
