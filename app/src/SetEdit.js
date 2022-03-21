import React from "react";
import {Box,Button} from "@chakra-ui/react"
import {CloseIcon} from "@chakra-ui/icons"
import {ReactSortable} from "react-sortablejs"
import Content from "./ContentEdit"
import ContentAdd from "./ContentAdd"

export default function Set(group,setGroup) {
    function ClickDelete(i){
      setGroup([...group.slice(0,i),...group.slice(i+1)])
    }

    return (
      <Box align='center' py="90px" maxWidth="1500px" margin="auto">
        <ContentAdd info={group} setInfo={setGroup}/>
        <ReactSortable
        list={group}
        setList={setGroup}
        animation={150}
        onChange={(order, sortable, evt) => {}}
        onEnd={evt => {}}
        >
        {group.map((bookmark,i) => <Box display="inline-block" padding='10px' margin='auto' position="relative">
          {Content(bookmark.info)}
          <Button position="absolute" top="-10px" left="-10px" rounded="full" onClick={() => ClickDelete(i)}>
            <CloseIcon/>
          </Button>
        </Box>)}
        </ReactSortable>
      </Box>
    );
}
