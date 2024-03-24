
import styles from "./App.module.css";
import NewDisplay from "./components/NewDisplay";
import ButtonsContainer from "./components/ButtonsContainer";


function App() {

  return (
    <>
    <h1>Calculator</h1>
    <div className={styles.calculator}>
      <NewDisplay></NewDisplay>
      <ButtonsContainer></ButtonsContainer>
    </div> 
    </>
  );
}

export default App
