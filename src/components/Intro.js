import React from 'react'
import {
    useMediaQuery,
    Box,
    Center,
    Text
} from '@chakra-ui/react'

import img from "./data/musicrow.jpg"
import { Highlight } from './shared/Highlight';
import blowpopcrew from "./data/blowpopcrew.jpg"
import pistol from "./data/pistol.jpg"
import starlito from "./data/starlito.jpg"


export default function Intro() {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  return (
    <Box w={isLargerThanLG ? "60vw" : "full"} textAlign={"center"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"} borderBottom="8px solid grey" py="5">
    <Text fontSize={"4xl"} fontWeight={"bold"} py='3'>
    Introduction
    </Text>
    <Box>
    Nashville is known as "Music City" for a reason. Millions of tourists come to Nashville for its rich history in country and pop.

    It started in the 1800's with the Fisk Jubilee Singers from Nashville's Fisk University. They pushed Nashville into the spotlight as a global music center with their around-the-world tour. 

    Moving into the 1960's the legacy grew, with Jimi Hendrix creditting Nashville for teaching him how to really play. From the Schermerhorn Symphony Center down the road to the Ryman Auditorium and Grand Ole Opry to the Bluebird Cafe and Broadway, the streets of Nashville are flooded with nearly every genre of music. Here, music is written, recorded, and performed every single day.
    
    </Box>

    <Center my="3">
        <img src={img} alt="Music Row at Night"/>
    </Center>

    <Text>
    But, music in Nashville isn't one dimensional, and it serves as a host for a breadth of genres, styles, and musical histories. Througout the city, all genres of music and artists are fighting for a platform. Moreover, these artists and collectives are pushing to change the narrative of what Nashville has to offer, and where other up and coming artists should call home. At the moment, Nashville hip-hop is more underground than its commercial country counterparts, but that has lead to a diverse sonic pallete, rather than a singular aesthetic.
    </Text>

    </Box>
    
  )
}
