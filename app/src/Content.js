import React from "react";
import {Box,Image,Link,HStack,Heading,Text,Tooltip} from "@chakra-ui/react"

export default function App(info) {
  return (
    <Tooltip label={info.comment}>
    <Box width="300px" height="200px" borderWidth="1px" overflow="hidden" borderRadius="10px" p="5px" shadow="md" display="inline-block">
      <Link href={info.url}>
      <HStack spacind="1px">
        <Image width="100px" src={info.image} alt="NotImage"/> 
        <Heading fontSize="l">
          {info.title}</Heading>
      </HStack>
      <Text>{info.description}</Text>
      </Link>
    </Box>
    </Tooltip>
  );
}