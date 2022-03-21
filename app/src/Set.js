import React from "react";
import {Box} from "@chakra-ui/react"
import Content from "./Content"

export default function Set(group,setGroup) {
    return (
      <Box align='center' py="90px" maxWidth="1500px" margin="auto">
      {group.map((bookmark) => <Box display="inline-block" padding='10px' margin='auto'>
        {Content(bookmark.info)}
      </Box>)}
      </Box>
    );
}
