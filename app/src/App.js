import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from "@chakra-ui/react"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Box>Hello World</Box>}/>
      </Routes>
    </BrowserRouter>
  );
}
