import React from 'react'
import {
    Box,
    Text
} from "@chakra-ui/react"

export default function Heading() {
  return (
    <Box borderBottom={"3px solid gray"} my="3" paddingTop={"3"} paddingBottom={"8"} >
    <Box>
    <Text fontSize="6xl" as="b">
    Music City
    </Text>
    </Box>
    <Box >
    <Text fontSize="3xl" as="i">
    A Look into the Hip-Hop Scene in Nashville, TN
    </Text>
    </Box>
    
    </Box>
  )
}
