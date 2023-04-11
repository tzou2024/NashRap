import React from 'react'
import {
    useMediaQuery,
    Box,
    Center
} from '@chakra-ui/react'

import img from "./data/musicrow.jpg"
import { Highlight } from './shared/Highlight';
import blowpopcrew from "./data/blowpopcrew.jpg"
import pistol from "./data/pistol.jpg"
import starlito from "./data/starlito.jpg"


export default function Intro() {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  return (
    <Box w={isLargerThanLG ? "60vw" : "full"} textAlign={"center"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
    <Box>
    Nashville is known as "Music City" for a reason. Millions of tourists come to Nashville for its rich history in country and [ELABORATE].

    It started in the 1800's with the <span className="Famous">Fisk Jubilee Singers</span> from Nashville's Fisk University. They pushed Nashville into the spotlight as a global music center with their around-the-world tour. 

    Moving into the 1960's the legacy grew, with  <span className='Famous'>Jimi Hendrix</span> creditting Nashville for teaching him how to really play. From the <span className='Famous'>Schermerhorn Symphony Center</span> down the road to the <span className='Famous'>Ryman Auditorium</span> and <span className='Famous'>Grand Ole Opry</span> to the <span className='Famous'>Bluebird Cafe</span> and <span className='Famous'>Broadway</span>, the streets of Nashville are flooded with nearly every genre of music. Here, music is written, recorded, and performed every single day.
    
    </Box>

    <Center my="3">
        <img src={img} alt="Music Row at Night"/>
    </Center>

    </Box>
    
  )
}
