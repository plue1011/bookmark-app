import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box,Center,Heading} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"

export default function App(user_id) {
  const [group,setGroup] = useState([])
  useEffect(() => {axios.get(`http://127.0.0.1:8010/folders/${user_id}`)
    .then((res) => {setGroup(res.data.folder_list)})
    .catch(() => {console.log("API読み込み失敗")})},[])

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
      align='center' justify='center'
      >
        {group.map((g) => 
        <Box display="inline-block" padding="10px">
          <Center bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px' _hover={{bg:'#A0AEC0',cursor:'pointer'}}>
            {g.title}
          </Center>
        </Box>)}
      </ReactSortable>
      </Box>
    </Box>
  );
}
