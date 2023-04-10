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

    <Box>
    While country dominates the public music scenes, the roots of Hip Hop run throught he underground. Hip Hop Started in The Bronx decades ago, with innovators like <span className="Famous"> DJ Kool Herc</span> and the <span className="Famous"> Fab Five</span>. In Nashville, it was the <span className="NashFamous">Blow Pop Crew</span>


    </Box>
    <Highlight imgsrc={blowpopcrew} title="The Blow Pop Crew" descrip='
    The Blow Pop Crew was a trio from South Nashville, started when then then Walter D was gifed a Spoonie Gee. His friend, French Toast and later Blow Pop soon joined through a common interest. Their breakdance and cyphers lead to a connection with Manager Henry Dotson and a breakout single, "Drop the Base". More influenced by slow-and-low Def Jam thump than upbeat Sugar Hill funk, they helped established Southern Rap as we know it.'/>


    <Box>
    The Blow Pop Crew were on the path to fame with their single "Drop the Bass", but things fell apart when Blow Pop was incarcerated for manslaughter, and manager Henry Dotson mysteriously died from unrelated circumstances.
    </Box>

    <Box>
    In the '90s came an artist called <span className="NashFamous">Pistol</span>. Pistol was a local hero that appeared on the scene with Eazy-E and E's Ruthless Records. 
    </Box>

    <Highlight imgsrc={pistol} title="Pistol" descrip="
    Leroy Gordon, known as Pistol, was the next big thing in Nashville Rap. He was a gangsta rapper from the Preston-Taylor projects who signed with Ruthless Records and Eazy-E, a leader of the group N.W.A, and Godfather of Gansta Rap. 
    "/>
    Unfortunately, soon after Pistol released his debut <i>Hittin Like a Bullet</i> in June 1994, Easy-E died due to AIDS and Pistol went back down underground. 

    


    </Box>
    
  )
}
