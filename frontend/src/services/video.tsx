import axios from 'axios';
import { API_URL } from '../util/config';

const baseUrl = `${API_URL}/videos`


const getVideos = async () => {
  const response = await axios.get(baseUrl)
  return response.data.files
}

const getVideo = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export default { getVideo, getVideos }