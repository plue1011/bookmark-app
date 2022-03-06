import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from "@chakra-ui/react"
import Home from "./Home"
import Set from "./Set"
import Tree from "./Tree"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Set" element={<Set/>}/>
        <Route path="/Tree" element={<Tree/>}/>
      </Routes>
    </BrowserRouter>
  );
}
