import React,{useState} from "react";
import {Box,Heading} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import Content from "./Content"

export default function Set(group,setGroup) {
    return (
      <Box>
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
      <Box align='center' py="90px" maxWidth="1500px" margin="auto">
      <ReactSortable
      list={group}
      setList={setGroup}
      animation={150}
      onChange={(order, sortable, evt) => {}}
      onEnd={evt => {}}
      >
      {group.map((bookmark) => <Box display="inline-block" padding='10px' margin='auto'>
        {Content(bookmark.info)}
      </Box>)}
      </ReactSortable>
      </Box>
      </Box>
    );
}
