import React from 'react'
import { Box,Text, SimpleGrid, theme, Link} from '@chakra-ui/react'
import { Theme } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box mt={20} borderTop={"3px solid black"} marginBottom={"4"}>
        
        <Text
          fontSize="2xl"
          textAlign="center"
          maxW="800px"
          m="0 auto"
        //   borderBottom="1px #bbb solid"
          mt={4}
          pb={10}
        >
        This project was built for UCC's Post Colonial Hip Hop and Rap Class SP2023. Content curation and website design was made entirely from scratch by Trevor Zou. Hope you enjoyed!
        </Text>
        <Link fontSize="3xl"fontWeight="bold" textAlign="center" mb="3" isExternal href="https://docs.google.com/document/d/1UUZYdz-MBcRqUX5XJ-PUtT1-F-jNyINCstxkiGBZGko/edit?usp=sharing">
          Sources
        </Link>
      </Box>
  )
}

export default Footer