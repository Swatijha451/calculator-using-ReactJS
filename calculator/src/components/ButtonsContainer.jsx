import styles from "./ButtonsContainer.module.css";

const buttonVAlues=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

 const ButtonsContainer=({onButtonClick})=>{
    return(
    <div className={styles.buttonContainer}>
        {buttonVAlues.map((buttonName)=>(
        <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
        ))}
      </div>
    );
};
export default ButtonsContainer;