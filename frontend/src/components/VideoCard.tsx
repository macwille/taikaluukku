
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActionArea from "@mui/material/CardActionArea"
import CardHeader from "@mui/material/CardHeader"

interface VideoProps {
  name: string,
  id: string
}

const VideoCard = ({ id, name }: VideoProps) => {
  const split = name.split('.')[0]
  const navigate = useNavigate()

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/videos/${id}`)
  }

  return (
    <Card style={{ minWidth: '10vw' }}>
      <CardActionArea onClick={handleClick}>
        <CardContent style={{ justifyContent: 'center', textAlign: 'center' }}>
          <CardHeader title={split} />
        </CardContent>
      </CardActionArea>
    </Card >
  )
}

export default VideoCard