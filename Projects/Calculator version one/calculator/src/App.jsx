import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input type="text" className={styles.display} />
      <div className={styles.btnContainer}>
        <button className={styles.btn}>C</button>
        <button className={styles.btn}>1</button>
        <button className={styles.btn}>2</button>
        <button className={styles.btn}>+</button>
        <button className={styles.btn}>C</button>
        <button className={styles.btn}>C</button>
      </div>
    </div>
  );
}

export default App;
