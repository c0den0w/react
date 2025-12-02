import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function BasicButtons({ buttonOne, buttonTwo, buttonThree }) {
  let [index, setIndex] = useState(1);
  const limit = 19;
  function handleClick() {
    if (index <= limit) setIndex(index + 1);
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={handleClick}>
        {buttonOne + " " + index}
      </Button>
      <Button variant="contained">{buttonTwo}</Button>
      <Button variant="outlined">{buttonThree}</Button>
    </Stack>
  );
}
