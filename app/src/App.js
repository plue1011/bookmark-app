import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import {Box} from "@chakra-ui/react"
import Signin from "./Signin"
import Signup from "./Signup"
// import Home from "./Home"
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}