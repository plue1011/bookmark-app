import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./Home"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home('908f3d11-618b-e216-5206-faefbef04d07')}/>
      </Routes>
    </BrowserRouter>
  );
}
