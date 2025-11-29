import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicButtons from "./Button";
import "./App.css";

function App() {
  return (
    <div>
      <BasicButtons
        buttonOne={"No fill"}
        buttonTwo={"Fill"}
        buttonThree={"Outline"}
      />
    </div>
  );
}

export default App
