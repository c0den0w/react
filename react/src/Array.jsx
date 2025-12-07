import { useState } from "react";
import Button from '@mui/material/Button';

let id =1;
export default function ListOfItems(){
    const [people, setPeople] = useState([]);
    const [name, setName] = useState("");
    function handleAddToList(){
        if(name && people.map((p) => p.name).indexOf(name) == -1){
            setPeople([...people, {name: name, id: id++}])
        }else{
            setPeople([...people])
        }
    }
    function handleOnDelete(){

    }
    return (
        <>
            <h1>List of famous people</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <Button type="submit" onClick={handleAddToList} variant="contained">Add</Button>
            <ul>
                {people.map((p) => <li key={p.id}>{p.name} <Button onClick={() =>
                    setPeople(people.filter((person) => person.id !==    p.id))
                }>Delete</Button> </ li>)}
            </ul>
        </>
    )
}