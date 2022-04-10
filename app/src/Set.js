import React,{useState} from "react";
import {Box,Heading} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import Content from "./Content"

export default function Set(group,setGroup) {
    return (
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
    );
}
