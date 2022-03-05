import React,{useState} from "react";
import {Flex,Center} from "@chakra-ui/react"
import {ReactSortable} from "react-sortablejs"
import Content from "./Content"

export default function Set(bookmarks) {
    const [group,setGroup] = useState(bookmarks)
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
        {group.map((bookmark) => <Flex float='left' padding='30px' margin='auto'>
        <Center bg='#CBD5E0' width='200px' height='100px'　borderRadius='10px' _hover={{bg:'#A0AEC0',cursor:'pointer'}}>
            {Content(bookmark)}
        </Center>
        </Flex>)}
    </ReactSortable>
    </Flex>
    );
}
