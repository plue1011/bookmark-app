import React from 'react';
import {Box,Heading} from "@chakra-ui/react"
import { Tree, TreeNode } from 'react-organizational-chart';
import Content from "./Content"

class TreeContent extends React.Component{
  render(){
    if (this.props.node.children.length == 0){
      return(
        <TreeNode label={Content(this.props.node.info)}></TreeNode>
      )
    }
    else{
      return(
        <TreeNode label={Content(this.props.node.info)}>
          {this.props.node.children.map((child) => 
            <TreeContent node={child}/>
          )}
        </TreeNode>
      )
    }
  }
}

class DrawTree extends React.Component{
  render(){
    return(
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
      <Tree label={Content(this.props.graph[0].info)}>
              {this.props.graph[0].children.map((child) => <TreeContent node={child}/>)}
      </Tree>
      </Box>
      </Box>
    )
  }
}

export default DrawTree