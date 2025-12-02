import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicButtons from "./Button";
import PackingList from "./list";
import "./App.css";

function App() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  const chemists = people.filter((person) => person.profession === "chemist");
  const listitems = chemists.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));
  return <ul>{listitems}</ul>;
}

export default App
