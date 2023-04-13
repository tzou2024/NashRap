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
import youngbuck from "./data/youngbuck.jpg"

export default function Intro() {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  return (
    <Box w={isLargerThanLG ? "60vw" : "full"} textAlign={"center"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"} borderBottom={"8px solid grey"}>
    
    <Text fontSize={"4xl"} fontWeight={"bold"}>
        History
    </Text>
    

    <Box>
    While country dominates the public music scenes, the roots of Hip Hop run throught he underground. Hip Hop Started in The Bronx decades ago, with innovators like  DJ Kool Herc and the Fab Five. Spreading throughout the US and beyond, Hip-Hop became diversified, with Hip-Hop having a localised representation based on the culture within each area, each with their own story and history. In Nashville, it really started with the Blow Pop Crew.


    </Box>
    <Highlight imgsrc={blowpopcrew} title="The Blow Pop Crew" descrip='
    The Blow Pop Crew was a trio from South Nashville, started when then then Walter D was gifed a Spoonie Gee. His friend, French Toast and later Blow Pop soon joined through a common interest. Their breakdance and cyphers lead to a connection with Manager Henry Dotson and a breakout single, "Drop the Base". More influenced by slow-and-low Def Jam thump than upbeat Sugar Hill funk, they helped established Southern Rap as we know it.'
    linker={"https://www.youtube.com/watch?v=EkJRr8KmmiY"}
    linkdescrip={"Drop the Bass"}/>


    <Box>
    The Blow Pop Crew were on the path to fame with their single "Drop the Bass", but things fell apart when Blow Pop was incarcerated for manslaughter, and manager Henry Dotson mysteriously died from unrelated circumstances.
    Next up in line, in the 90's came an artist called Pistol. Pistol was a local hero that appeared on the scene with Eazy-E and E's Ruthless Records. While the Blow Pop Crew had local success, it was really Pistol that first had extended influence and connections.
    </Box>

    <Highlight imgsrc={pistol} title="Pistol" descrip="
    Leroy Gordon, known as Pistol, was the next big thing in Nashville Rap. He was a gangsta rapper from the Preston-Taylor projects who signed with Ruthless Records and Eazy-E, a leader of the group N.W.A, and Godfather of Gansta Rap. 
    "
    linker={"https://www.youtube.com/watch?v=PRWLoGlA2Wk"}
    linkdescrip={"Hittin' Like a Bullet"}/>
    Unfortunately, soon after Pistol released his debut <i>Hittin Like a Bullet</i> in June 1994, Easy-E died due to AIDS and Pistol went back down underground. 
    Nashville had several more bright spots moving through the 2000's, including Youg Buck with <i>Straight Outta Cashville</i> and Starlito with several Billboard Top 200 albums appearences.
    <Highlight imgsrc={starlito} title="Starlito" descrip="
    Jermain Eric Shute, also known as Starlito, was a rapper out of Nashville and Hume-Fogg Highschool in Downtown. His 2005 hit 'Grey Goose' featured Yo Gotti and went national. His discography contains features with famous rappers like Lil Wayne and Gucci Mane, and he went on a US tour covering 43 cities with Don Trip from Memphis, Tennessee after joint project 'Stepbrothers Three'.
    "
    linker={"https://www.youtube.com/watch?v=-UxGB2PkBao"}
    linkdescrip={"Grey Goose"}/>
    
    

    <Highlight imgsrc= {youngbuck} title = "Young Buck" descrip="Young Buck was another to be considered to be one of the first Nashville Rappers to make it mainstream. Buck, alongside his label chief 50 Cent, and crew known as G-Unit, were selling out stadiums.
    His debut album, Straight Outta Cashville, sold a quarter millions copies in its first week, and his second release Buck the World went certified gold. After a rocky relationship with 50, Buck eventually started his own local label, Cashville Records, signing lacals rappers to pump out free mixtapes to stay connected with fans."
    linker={"https://www.youtube.com/watch?v=WznGf4hMNl0"}
    linkdescrip={"Straight Outta Cashville"}/>

    </Box>
    // </Box>
    
  )
}
