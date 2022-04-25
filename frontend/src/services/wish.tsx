import axios from 'axios';
import { API_URL } from '../util/config';

const baseUrl = `${API_URL}/wishes`

const getWishes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addWish = async (name: string) => {
  const response = await axios.post(baseUrl, { name })
  return response.data
}

const deleteWish = async (id: string) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.status
}

export default { getWishes, addWish, deleteWish }