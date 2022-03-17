import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box,Button,Center,Heading} from "@chakra-ui/react"

export default function Header(){
    return(
        <Box
        width="100%"
        height="80px"
        position="fixed"
        bg="#319795"
        padding="0 20px"
        box-sizeing="border-box"
        zIndex="sticky"
        >
          <Heading float="left" color="white">Bookmark</Heading>
        </Box> 
    )
}