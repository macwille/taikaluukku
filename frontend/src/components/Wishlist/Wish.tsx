import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import wishService from '../../services/wish'

import React from 'react';
import { Typography } from '@mui/material';

interface IWish {
  id: string,
  name: string
}

interface WishProps {
  id: string,
  name: string,
  wishes: IWish[],
  setWishes: (value: IWish[]) => void
}

const Wish = ({ id, name, wishes, setWishes }: WishProps) => {

  const deleteWish = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await wishService.deleteWish(id);
      if (result === 204) {
        setWishes(wishes.filter(wish => wish.id !== id))
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (name) {
    return (
      <div>
        <Typography variant="subtitle1" > {name} <IconButton size='small' onClick={deleteWish}><DeleteIcon /></IconButton> </Typography>
      </div>
    )
  }

  return (
    <div>
      {id} <IconButton onClick={deleteWish}><DeleteIcon /></IconButton>
    </div>
  )
};

export default Wish