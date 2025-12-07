import { useState } from "react";
import {useImmer} from "use-immer"

export default function Form() {
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
    copyrights: 'Robin@2025'
  });

  function handleNameChange(e) {
    setPerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    setPerson((draft) => {
      draft.artwork.title = e.target.value
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  function handleCopyRightChange(e){
    setPerson({
      ...person,
      copyrights: e.target.value
    })
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
            <label>
        Copyright:
        <input
          value={person.copyrights}
          onChange={handleCopyRightChange}
        />
      </label>
     
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
      <p>
        <b>{person.copyrights}</b>
      </p>
    </>
  );
}
