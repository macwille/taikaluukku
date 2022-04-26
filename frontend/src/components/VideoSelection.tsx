import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import videoService from '../services/video';
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import VideoCard from './VideoCard'

interface Video {
  kind: string,
  id: string,
  name: string,
  mimeType: string
}

const VideoSelection = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getFile = async () => {
      try {
        const response = await videoService.getVideos();
        const filtered = response.filter((m: Video) => m.mimeType.includes('video'));
        const alpha = filtered.sort((a: Video, b: Video) => a.name.localeCompare(b.name))
        const mappedList = alpha.map((m: Video) =>
          <VideoCard key={m.id} id={m.id} name={m.name} />
        );
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
          <Stack direction="row" spacing={6}>
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
      <Helmet>
        <title>Elokuvat - Taikaluukku</title>
      </Helmet>
      <Typography variant="h4" paragraph>Elokuvat</Typography>
      {conditionalRender()}
    </div >
  )
}

export default VideoSelection