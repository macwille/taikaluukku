
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { CardActionArea, CardHeader } from "@mui/material";

interface VideoProps {
  name: string,
  id: string
}

const VideoCard = ({ id, name }: VideoProps) => {
  const split = name.split('.')[0]
  const navigate = useNavigate()

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Action area clicked')
    navigate(`/videos/${id}`)
  }

  return (
    <Card style={{ minWidth: '10vw' }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <CardHeader title={split} />
        </CardContent>
      </CardActionArea>
    </Card >
  )
}

export default VideoCard