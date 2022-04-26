
import { useParams, useLocation } from "react-router-dom"
import { Helmet } from 'react-helmet'
import Iframe from 'react-iframe'
import Typography from '@mui/material/Typography';
import { createSvgIcon } from '@mui/material';

interface LocationState {
  name: string
}

const VideoPlayer = () => {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state as LocationState;
  const shortName = state.name?.split('.')[0]

  const HomeIcon = createSvgIcon(
    <path d="M 12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z m 0 2 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z m 0 6 c -1.1 0 -2 0.9 -2 2 s 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 Z" />,
    'Home',
  );
  return (
    <div id="video-wrapper">
      <Helmet>
        <title>{shortName} - Taikaluukku</title>
      </Helmet>
      <Typography>1. Paina elokuvan play nappia kunnes elokuva alkaa. Muista valita tekstitykset sekä HD laatu soittimesta. </Typography>
      <Typography>2. Avaa Chrome selaimen valikko<HomeIcon fontSize="small" />oikeasta yläkulmasta ja valitse Cast... </Typography>
      <Typography>3. Valitse lähteistä: Suoratoista välilehti </Typography>
      <Typography>4. Klikkaa Lähteiden yläpuolella olevasta listasta laitetta johon elokuva lähetetään.</Typography>
      <Typography>5. Suurenna elokuva selaimessa koko näyttöön, voit piilottaa välilehden sulkematta sitä.</Typography>
      <Iframe id="videoplayer" url={`https://drive.google.com/file/d/${id}/preview?version=3&vq=hd108`} frameBorder={0} width="100%" height="640" allowFullScreen></Iframe>
    </div >
  )
}

export default VideoPlayer