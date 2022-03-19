import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box,Button,Heading} from "@chakra-ui/react"
import Header from "./Header"
import Tree from "./Tree"
import Set from "./Set"
import Folder from "./Folder";

export default function App(user_id) {
  const [group,setGroup] = useState([])
  const [page,setPage] = useState("home")
  const [info,setInfo] = useState("")

  useEffect(() => {
    axios.get(`http://127.0.0.1:8010/folders/${user_id}`)
      .then((res) => {
        setGroup(res.data.folder_list)
        console.log(res.data)
      })
      .catch((err) => {console.log("foldersAPI err:",err)})
    },[])
  
    axios.get(`http://127.0.0.1:8010/folders/${user_id}`)
    .then((res) => {
      setGroup(res.data.folder_list)
      console.log(res.data)
    })
  
  if (page == "home"){
    return (
      <Box>
        <Header/>
        {Folder(group,setGroup,setPage,setInfo)}
      </Box>
    )
  }
  else if (page == "set") {
    return(
    <Box>
      <Header/>
      {Set(info,setInfo)}
      <Button onClick={()=>{setPage("home")}}>戻る</Button>
    </Box>
    )
  }
  else if (page == "tree") {
    return(
    <Box>
      <Header/>
      <Tree graph = {info} setGraph = {setInfo}/>
      <Button onClick={()=>{setPage("home")}}>戻る</Button>
    </Box>
    )
  }
}