import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function BasicButtons({ buttonOne, buttonTwo, buttonThree }) {
  let [index, setIndex] = useState(1);
  const limit = 19;
  function handleClick() {
    if (index <= limit) setIndex((i) => i + 1);
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={handleClick}>
        {buttonOne}
      </Button>
      <Button variant="contained" onClick={() => {handleClick()
        handleClick();
        handleClick();
        handleClick();
      }}>{buttonTwo}</Button>
      <Button variant="outlined">{index}</Button>
    </Stack>
  );
}
