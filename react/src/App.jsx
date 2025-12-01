import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicButtons from "./Button";
import PackingList from "./list";
import "./App.css";

function App() {
  return (
    <div>
      <PackingList item={"Binocular"} isPacked={true} />
      <PackingList item={"Pollution mask"} isPacked={true} />
      <PackingList item={"Trekking boots"} isPacked={false} />
    </div>
  );
}

export default App
