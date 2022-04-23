import * as React from 'react';
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface NavigationProps {
  loggedUser: string | false;
  setUser: (value: false) => void;
}

const NavigationBar: React.FC<NavigationProps> = ({ loggedUser, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    setUser(false);
    window.localStorage.clear();
    navigate('/')
  }

  return (
    <div id="navbar">
      <nav>
        <AppBar position="fixed">
          <Toolbar >
            <Stack direction="row" spacing={4} marginLeft={"15%"} justifyContent="center" alignItems="center">
              <Button component={Link} to={"/"} variant="contained">Tervetuloa</Button>
              <Button component={Link} to={"/videos"} variant="contained">Elokuvat</Button>
              <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>Taikaluukku</Typography>
              {loggedUser !== false &&
                <Button onClick={handleLogout} variant="contained">Log Out</Button>
              }
            </Stack>
          </Toolbar>
        </AppBar>
      </nav>
    </div >
  )
}

export default NavigationBar