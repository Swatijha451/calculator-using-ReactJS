
import styles from "./App.module.css";
import NewDisplay from "./components/NewDisplay";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";


function App() {

  const [calVal,setCalVal]=useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal("");

    }
    else if(buttonText==='='){
      const result=eval(calVal);
      setCalVal(result);

    }
    else{
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue)
    }
  }
  return (
    <>
    <h1 className={styles.heading}>CALCULATOR</h1>  
    <div className={styles.calculator}>
      <NewDisplay displayValue={calVal}></NewDisplay>
      <ButtonsContainer 
      onButtonClick={onButtonClick}>
      </ButtonsContainer>
    </div> 
    </>
  );
}

export default App
