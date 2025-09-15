import React, { useEffect } from 'react';
import './App.css';
import createFont from './utils/createFont';
import Home from './pages/Home';
import SinglePlayer from './pages/SinglePlayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MultiPlayer from './pages/MultiPlayer';
import Game from './pages/Game';


function App() {

  useEffect(() => {
    createFont();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleplayer" element={<SinglePlayer />} />
        <Route path="/multiplayer" element={<MultiPlayer />} />
        <Route path="/game/:worldId" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
