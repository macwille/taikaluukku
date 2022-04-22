import axios from 'axios'
import { API_URL } from '../util/config'

const baseUrl = `${API_URL}/users`


const login = async (name: string, password: string) => {
  const response = await axios.post(baseUrl, { name: name, password: password });
  return response.data
}

export default { login }