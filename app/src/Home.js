import React,{useState} from "react";
import {Flex,Center} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"

export default function App() {
  const [group,setGroup] = useState([1,2,3,4,5,6,7,8,9,10])

  return (
    <Flex align='center' justify='center'>
    <ReactSortable
    list={group}
    setList={setGroup}
    animation={150}
    onChange={(order, sortable, evt) => {}}
    onEnd={evt => {}}
    align='center' justify='center'
    >
      {group.map(() => <Flex float='left' padding='20px' margin='auto'>
        <Center bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px' _hover={{bg:'#A0AEC0',cursor:'pointer'}}>
          タイトル
        </Center>
      </Flex>)}
    </ReactSortable>
    </Flex>
  );
}
