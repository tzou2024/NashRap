import React from 'react'
import {
    Box,
    Text,
    Center
} from "@chakra-ui/react"
import titlecard from "./data/titlecard.jpg"

export default function Heading() {
  return (
    <Box borderBottom={"8px solid gray"} my="3" py={"3"}  minHeight={"90vh"}>
    <Box>
    <Text fontSize="6xl" as="b">
    Cashville
    </Text>
    </Box>
    <Box >
    <Text fontSize="4xl" as="i">
    History and Present Hip-Hop in Nashville, Tennessee
    </Text>
    
    </Box>
    <Box justifyItems={"center"}>
    <Center my="4rem" >
        <img src={titlecard} alt="Music Row at Night" width="500rem"/>
    </Center>
    </Box>

    
    
    </Box>
  )
}
