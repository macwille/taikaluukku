import { useState, useEffect } from 'react';
import videoService from '../services/video';
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import VideoCard from './VideoCard'

const VideoSelection = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getFile = async () => {
      try {
        const response = await videoService.getVideos();
        const filtered = response.filter((m: { mimeType: string; }) => m.mimeType === 'video/mp4')
        console.log(filtered)
        const mappedList = filtered.map((m: { id: string; name: string; }) =>
          <VideoCard key={m.id} id={m.id} name={m.name} />
        )
        setList(mappedList);
      } catch (error) {
        console.log('Error when logging in', error)
      }
    }
    getFile()
  }, [])

  const conditionalRender = () => {
    if (list.length > 0) {
      return (
        <>
          <Stack direction="row" spacing={4} alignItems="center">
            {list}
          </Stack>
        </>
      )
    }
    return (
      <>
        <Box p={10}>
          <CircularProgress />
        </Box>
      </>
    )
  }
  return (
    <div id="video-selection">
      <Typography variant="h4" paragraph>Elokuvat</Typography>
      {conditionalRender()}
    </div >
  )
}

export default VideoSelection