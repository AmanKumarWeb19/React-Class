import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>C</button>
      <button className={styles.btn}>1</button>
      <button className={styles.btn}>2</button>
      <button className={styles.btn}>+</button>
      <button className={styles.btn}>C</button>
      <button className={styles.btn}>C</button>
    </div>
  );
};

export default ButtonContainer;
