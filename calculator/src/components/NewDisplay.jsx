import styles from "./NewDisplay.module.css";

const NewDisplay=({displayValue})=>{
    return <input className={styles.display} type="text" value={displayValue} readOnly />;
};

export default NewDisplay;
