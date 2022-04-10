import React,{useState} from 'react';
import {Box,Button,Popover,PopoverTrigger,PopoverContent,PopoverCloseButton,
  PopoverBody,FormLabel,Input,useDisclosure} from "@chakra-ui/react"
import {CloseIcon,AddIcon} from "@chakra-ui/icons"
import { Tree, TreeNode } from 'react-organizational-chart';
import Content from "./ContentEdit"
import axios from 'axios';

function ClickDelete(graph,setGraph,position){
  console.log(graph[0])
  console.log(position)
  let A = graph[0]
  let B = graph[0]
  for (const p of position){
    A = A.children[p]
  }

  for (const p of position.slice(0,-1)){
    B = B.children[p]
  }

  B.children = [...B.children.slice(0,position[position.length-1]),...A.children,...B.children.slice(position[position.length-1]+1)]
  console.log(graph[0])
  setGraph([graph[0]])
}

function ClickAdd(graph,setGraph,position,info){
  console.log(graph)
  console.log(position)
  let A = graph[0]
  for (const p of position){
    A = A.children[p]
  }
  A.children = [...A.children,info]
  console.log(graph[0])
  setGraph([graph[0]])
}

function AddButton(props){
  const {onOpen,onClose,isOpen} = useDisclosure()
  const [url,setURL] = useState("")
  const [comment,setComment] = useState(null)

  return(
    <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
        <PopoverTrigger>
          <Button position="absolute" top="-10px" right="-10px" rounded="full">
            <AddIcon/>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton/>
          <PopoverBody>
          <FormLabel>URL</FormLabel>
          <Input value={url} onChange={(e) => setURL(e.target.value)}></Input>
          <FormLabel>Comment</FormLabel>
          <Input value={comment} onChange={(e) => setComment(e.target.value)}></Input>
          <Button size="s" padding="5px" margin="5px" onClick={() => {
            axios.post(`http://127.0.0.1:8020/bookmark?url=${url}`)
            .then((res) => {
                const i = {"url":res.data.url,"image":res.data.image_url,"description":res.data.description,"title":res.data.title,"comment":comment}
                const info = {"id":res.data.id,"info":i,children:[]}
                setURL("")
                setComment("")
                onClose()
                ClickAdd(props.graph,props.setGraph,props.position,info)
              })
            }
          }>追加</Button>
          </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}

class TreeContent extends React.Component{
  render(){
    if (this.props.node.children.length == 0){
      return(
        <TreeNode label={
          <Box display="inline-block" padding='10px' margin='auto' position="relative">
            {Content(this.props.node.info)}
            <Button onClick={() => ClickDelete(this.props.state.graph,this.props.state.setGraph,this.props.position)} position="absolute" top="-10px" left="-10px" rounded="full">
              <CloseIcon/>
            </Button>
            <AddButton graph={this.props.state.graph} setGraph={this.props.state.setGraph} position={this.props.position}/>
          </Box>
        }></TreeNode>
      )
    }
    else{
      return(
        <TreeNode label={
          <Box display="inline-block" padding='10px' margin='auto' position="relative">
            {Content(this.props.node.info)}
            <Button onClick={() => ClickDelete(this.props.state.graph,this.props.state.setGraph,this.props.position)} position="absolute" top="-10px" left="-10px" rounded="full">
              <CloseIcon/>
            </Button>
            <AddButton graph={this.props.state.graph} setGraph={this.props.state.setGraph} position={this.props.position}/>
          </Box>
        }>
          {this.props.node.children.map((child,i) => 
            <TreeContent node={child} position={[...this.props.position,i]} state={this.props.state}/>
          )}
        </TreeNode>
      )
    }
  }
}

class DrawTree extends React.Component{
  render(){
    return(
      <Box align='center' py="90px" maxWidth="1500px" margin="auto">
        <Tree label={
          <Box display="inline-block" padding='10px' margin='auto' position="relative">
            {Content(this.props.graph[0].info)}
            <AddButton graph={this.props.graph} setGraph={this.props.setGraph} position={[]}/>
          </Box>
          }>
                {this.props.graph[0].children.map((child,i) => <TreeContent node={child} position={[i]} state={this.props}/>)}
        </Tree>
      </Box>
    )
  }
}

export default DrawTree