import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box,Button,Center,Heading} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import Header from "./Header"
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
        <Header/>
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
      <Header/>
      <Box>{Set(info,setInfo)}</Box>
      <Button onClick={()=>{setPage("home")}}>戻る</Button>
    </Box>
    )
  }
  else if (page == "tree") {
    return(
    <Box>
      <Header/>
      <Box><Tree graph = {info_base.contents} setGraph = {setInfo}/></Box>
      <Button onClick={()=>{setPage("Home")}}>戻る</Button>
    </Box>
    )
  }
}
