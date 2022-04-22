import { useEffect, useState } from 'react';
import Home from './components/Home';
import StreamsView from './components/VideoSelection';
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import VideoPlayer from './components/VideoPlayer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from './components/Copyright';

const App = () => {
  const [loggedUser, setUser] = useState<string | false>(false);

  useEffect(() => {
    const name = window.localStorage.getItem('name')
    if (name) {
      setUser(name);
    }
  }, [])

  return (
    <Router>
      <Container >
        <NavigationBar loggedUser={loggedUser} setUser={setUser} />
        <Box style={{ minHeight: "50vw" }} paddingTop={20}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<StreamsView />} />
            <Route path="/videos/:id" element={<VideoPlayer />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </Box>
        <Copyright />
      </Container >
    </Router >
  );
}

export default App;
