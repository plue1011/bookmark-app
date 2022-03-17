import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box,Button,Center,Heading} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import Tree from "./Tree"
import Set from "./Set"

export default function App(user_id) {
  const [group,setGroup] = useState([])
  const [page,setPage] = useState("home")
  const [info,setInfo] = useState("")
  useEffect(() => {
    axios.get(`http://127.0.0.1:8010/folders/${user_id}`)
      .then((res) => {
        setGroup(res.data.folder_list)
      })
      .catch((err) => {console.log("foldersAPI err:",err)})
  },[])

  function ClickFile(folder_id){
    axios.get(`http://127.0.0.1:8010/contents/${folder_id}`)
      .then((res) => {
        setInfo(res.data.contents)
        setPage(res.data.type)
      })
      .catch((err) => {console.log("contentsAPI err:",err)})
  }

  
  if (page == "home"){
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
            <Center onClick={() => ClickFile(g.id)} bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px' _hover={{bg:'#A0AEC0',cursor:'pointer'}}>
              {g.title}
            </Center>
          </Box>)}
        </ReactSortable>
        </Box>
      </Box>
    )
  }
  else if (page == "set") {
    return(
    <Box>
      <Box>{Set(info,setInfo)}</Box>
      <Button onClick={()=>{setPage("home")}}>戻る</Button>
    </Box>
    )
  }
  else if (page == "tree") {
    return(
    <Box>
      <Box><Tree graph = {info} setGraph = {setInfo}/></Box>
      <Button onClick={()=>{setPage("home")}}>戻る</Button>
    </Box>
    )
  }
}
