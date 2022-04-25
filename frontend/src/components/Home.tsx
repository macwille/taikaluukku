import Typography from "@mui/material/Typography"
import WishList from "./Wishlist/WishList"

const Home = () => {

  return (
    <div>
      <Typography variant="h4" paragraph>Tervetuloa</Typography>
      <WishList />
    </div>
  )
}

export default Home