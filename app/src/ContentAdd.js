import React,{useState,useEffect} from "react";
import {Box,Button,Center,Popover,PopoverTrigger,PopoverContent,PopoverCloseButton,
  PopoverBody,FormLabel,Input,useDisclosure} from "@chakra-ui/react"
import axios from "axios"

export default function AddContent(props){

    const {onOpen,onClose,isOpen} = useDisclosure()
    const [url,setURL] = useState("")
    const [comment,setComment] = useState(null)
  
    function ClickAdd(){
      if(url !== ""){
        axios.post(`http://127.0.0.1:8020/bookmark?url=${url}`)
            .then((res) => {
                const i = {"url":res.data.url,"image":res.data.image_url,"description":res.data.description,"title":res.data.title,"comment":comment}
                props.setInfo([{"id":res.data.id,"children":null,"info":i},...props.info])
            })
        setURL("")
        setComment("")
        onClose()
      }
      else{
        setURL("")
        setComment("")
        onClose()
      }
    }
  
    return(
      <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
        <PopoverTrigger>
            <Center margin="30px" width="300px" height="150px" borderWidth="1px" borderRadius="10px" shadow="md">
            追加
            </Center>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton/>
          <PopoverBody>
          <FormLabel>URL</FormLabel>
          <Input value={url} onChange={(e) => setURL(e.target.value)}></Input>
          <FormLabel>Comment</FormLabel>
          <Input value={comment} onChange={(e) => setComment(e.target.value)}></Input>
          <Button size="s" padding="5px" margin="5px" onClick={() => ClickAdd()}>追加</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }