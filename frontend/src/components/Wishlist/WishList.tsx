import { useEffect, useState } from 'react'
import wishService from '../../services/wish'
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import WishListInput from "./WishListInput";
import Wish from './Wish';

interface IWish {
  id: string,
  name: string
}

const WishList = () => {
  const [wishes, setWishes] = useState<IWish[]>([])

  useEffect(() => {
    const getWishes = async () => {
      try {
        const response = await wishService.getWishes();
        setWishes(response);
      } catch (error) {
        console.log('Error when logging in', error)
      }
    }
    getWishes()
  }, [])

  const list = wishes.map(w => (
    <ListItem key={w.id}><Wish id={w.id} name={w.name} wishes={wishes} setWishes={setWishes} /></ListItem>
  ))

  return (
    <Box>
      <Typography>Toivelista</Typography>
      <List style={{ listStyleType: "none" }}>
        {list}
      </List>
      <WishListInput wishes={wishes} setWishes={setWishes} />
    </Box>
  )

}
export default WishList
