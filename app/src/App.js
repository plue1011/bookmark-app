import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from "@chakra-ui/react"
import Home from "./Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
