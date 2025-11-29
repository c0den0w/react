import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({buttonOne, buttonTwo, buttonThree}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{buttonOne}</Button>
      <Button variant="contained">{buttonTwo}</Button>
      <Button variant="outlined">{buttonThree}</Button>
    </Stack>
  );
}
