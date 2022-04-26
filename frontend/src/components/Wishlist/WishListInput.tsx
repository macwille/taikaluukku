/* eslint-disable react/prop-types */
import { useField } from "../../hooks/useField"
import wishService from '../../services/wish'
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

interface IWish {
  id: string,
  name: string
}

interface WishProps {
  wishes: IWish[],
  setWishes: (value: IWish[]) => void
}

const WishListInput = ({ wishes, setWishes }: WishProps) => {
  const movie = useField({ type: 'text', defaultValue: '' });

  const addNote = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const added = await wishService.addWish(movie.value);
      setWishes(wishes.concat(added))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      component="form"
      onSubmit={addNote}
      autoComplete="off"
      justifyItems="center"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="my-input">Elokuvatoive</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" {...movie} required />
      </FormControl>
      <FormControl variant="standard" style={{ verticalAlign: "bottom", marginLeft: 10 }}>
        <Button variant="contained" size="small" color="primary" type="submit">Lisää</Button>
      </FormControl>
    </Box>
  );
}

export default WishListInput;