import React,{useState,useEffect} from "react";
import axios from "axios"
import {Box} from "@chakra-ui/react"
import Header from "./Header"
import Tree from "./Tree"
import TreeEdit from "./TreeEdit"
import Set from "./Set"
import SetEdit from "./SetEdit"
import FolderEdit from "./FolderEdit"
import Folder from "./Folder"

export default function App(user_id) {
  const [group,setGroup] = useState([])
  const [groupCopy,setGroupCopy] = useState(group)
  const [page,setPage] = useState("home")
  const [info,setInfo] = useState("")
  const [infoCopy,setInfoCopy] = useState(info)
  const [edit,setEdit] = useState(false)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8020/folders/${user_id}`)
      .then((res) => {
        setGroup(res.data.folder_list)
        console.log(res.data)
      })
      .catch((err) => {console.log("foldersAPI err:",err)})
    },[])
  
  if (page == "home"){
    return (
      <Box>
        {Header(edit,setEdit,setPage,setGroup,setGroupCopy,group,groupCopy)}
        {edit
          ?FolderEdit(groupCopy,setGroupCopy,setPage,setInfo)
          :Folder(group,setGroup,setPage,setInfo)
        }
      </Box>
    )
  }
  else if (page == "set") {
    return(
    <Box>
      {Header(edit,setEdit,setPage,setInfo,setInfoCopy,info,infoCopy)}
      {edit
        ? SetEdit(infoCopy,setInfoCopy)
        : Set(info,setInfo)
      }
    </Box>
    )
  }
  else if (page == "tree") {
    return(
    <Box>
      {Header(edit,setEdit,setPage,setInfo,setInfoCopy,info,infoCopy)}
      {edit
        ? <TreeEdit graph = {info} setGraph = {setInfo}/>
        : <Tree graph = {info} setGraph = {setInfo}/>
      }
    </Box>
    )
  }
}