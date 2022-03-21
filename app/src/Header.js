import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box,Button,Center,Heading} from "@chakra-ui/react"

export default function Header(edit,setEdit,setPage,setInfo,setInfoCopy,info,infoCopy){
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
          <Heading float="left" color="white" onClick={() => {
            setPage("home")
            setEdit(false)
            }}
            _hover={{cursor:'pointer'}}>Bookmark</Heading>
          {edit
            ?<Heading float="right" color="white" onClick={() => {
              setEdit(!edit)
              setInfo(infoCopy)
            }} _hover={{cursor:'pointer'}}>Save</Heading> 
            :<Heading float="right" color="white" onClick={() => {
              setEdit(!edit)
              setInfoCopy(info)
            }} _hover={{cursor:'pointer'}}>Edit</Heading>
          }
        </Box> 
    )
}