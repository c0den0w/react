import { useState } from "react";
import BasicButtons from "./Button";
import "./App.css";
function App() {
  return (
    <>
      <BasicButtons
        buttonOne={"First"}
        buttonTwo={"Second"}
        buttonThree={"Third"}
      ></BasicButtons>
    </>
  );
}

export default App;
