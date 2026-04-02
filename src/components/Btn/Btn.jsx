import styles from "./Btn.module.css";

export default function Btn({ children, variant = "large", ...restProps }) {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
