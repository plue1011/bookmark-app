import { v4 as uuidv4 } from 'uuid'
import React,{useState} from "react";
import {Box,Button,Center,Popover,PopoverTrigger,PopoverContent,PopoverCloseButton,
  PopoverBody,FormLabel,Input,useDisclosure} from "@chakra-ui/react"
import {CloseIcon} from "@chakra-ui/icons"
import {ReactSortable} from "react-sortablejs"

function AddFolder(props){

  const {onOpen,onClose,isOpen} = useDisclosure()
  const [title,setTitle] = useState("")

  function ClickAdd(){
    if(title !== ""){
      props.setGroup([{'id':uuidv4(),'title':title},...props.group])
      onClose()
    }
    else{
      onClose()
    }
  }

  return(
    <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
      <PopoverTrigger>
        <Center margin="30px" bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px' _hover={{bg:'#A0AEC0',cursor:'pointer'}}>
          追加
        </Center>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton/>
        <PopoverBody>
        <FormLabel>タイトル</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        <Button size="s" padding="5px" margin="5px" onClick={() => ClickAdd()}>追加</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default function FolderEdit(group,setGroup,setPage,setInfo){

    function ClickDelete(i){
      setGroup([...group.slice(0,i),...group.slice(i+1)])
    }
      
    return(
        <Box align='center' py="90px" maxWidth="1500px" margin="auto">
          <AddFolder group={group} setGroup={setGroup}/>
          <ReactSortable
          list={group}
          setList={setGroup}
          animation={150}
          onChange={(order, sortable, evt) => {}}
          onEnd={evt => {}}
          align='center' justify='center'
          >
            {group.map((g,i) => 
            <Box display="inline-block" margin="10px" position="relative">
              <Center bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px'>
                {g.title}
              </Center>
              <Button position="absolute" top="-10px" left="-10px" rounded="full" onClick={() => ClickDelete(i)}>
                <CloseIcon/>
              </Button>
            </Box>)}
          </ReactSortable>
        </Box>
    )
}