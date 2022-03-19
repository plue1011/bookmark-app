import React,{useState,useEffect} from "react";
import {Box,Button,Center,Heading} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import axios from "axios"

export default function Folder(group,setGroup,setPage,setInfo){

    function ClickFile(folder_id){
        axios.get(`http://127.0.0.1:8020/contents/${folder_id}`)
          .then((res) => {
            setInfo(res.data.contents)
            setPage(res.data.type)
          })
          .catch((err) => {console.log("contentsAPI err:",err)})
      }
      
    return(
        <Box align='center' py="90px" maxWidth="1500px" margin="auto">
          <ReactSortable
          list={group}
          setList={setGroup}
          animation={150}
          onChange={(order, sortable, evt) => {}}
          onEnd={evt => {}}
          align='center' justify='center'
          >
            {group.map((g) => 
            <Box display="inline-block" margin="10px">
              <Center onClick={() => ClickFile(g.id)} bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px' _hover={{bg:'#A0AEC0',cursor:'pointer'}}>
                {g.title}
              </Center>
            </Box>)}
          </ReactSortable>
        </Box>
    )
}