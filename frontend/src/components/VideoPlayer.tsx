import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import videoService from '../services/video';
import Iframe from 'react-iframe'
import Typography from '@mui/material/Typography';
import { createSvgIcon } from '@mui/material';

const VideoPlayer = () => {
  const { id } = useParams();

  const HomeIcon = createSvgIcon(
    <path d="M 12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z m 0 2 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z m 0 6 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z" />,
    'Home',
  );

  useEffect(() => {
    const getFile = async () => {
      try {
        if (typeof id === 'string') {
          const response = await videoService.getVideo(id);
        } else {
          console.log('No string given')
        }
      } catch (error) {
        console.log('Error when logging in', error)
      }
    }
    getFile()
  }, [id])

  return (
    <div id="video-wrapper">
      <Typography>1. Paina elokuvan play nappia kunnes elokuva alkaa. Muista valita tekstitykset sekä HD laatu soittimesta. </Typography>
      <Typography>2. Avaa Chrome selaimen valikko<HomeIcon fontSize="small" />oikeasta yläkulmasta ja valitse Cast... </Typography>
      <Typography>3. Valitse lähteistä: Suoratoista välilehti </Typography>
      <Typography>4. Klikkaa Lähteiden yläpuolella olevasta listasta laitetta johon elokuva lähetetään.</Typography>
      <Typography>5. Suurenna elokuva selaimessa koko näyttöön, voit piilottaa välilehden sulkematta sitä.</Typography>
      <Iframe id="videoplayer" url={`https://drive.google.com/file/d/${id}/preview?version=3&vq=hd108`} frameBorder={0} width="100%" height="640" allowFullScreen ></Iframe>
    </div >
  )
}

export default VideoPlayer