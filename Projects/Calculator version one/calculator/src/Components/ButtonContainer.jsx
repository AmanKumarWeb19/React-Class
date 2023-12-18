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
      {ButtonNames.map((buttonName) => (
        <button className={styles.btn}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
