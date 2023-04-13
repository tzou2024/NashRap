import React from 'react'
import {
    useMediaQuery,
    Box,
    Center,
    Text
} from '@chakra-ui/react'
import { Highlight } from './shared/Highlight';
import sixone from "./data/sixone.jpg"
import daishamcbride from "./data/daishamcbride.jpg"
import thirdeye from "./data/thirdeye.jpg"
import blackcity from "./data/blackcity.jpg"
import { Spotify } from 'react-spotify-embed';

const AdditionalListening = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

    return (
      <Box w={isLargerThanLG ? "60vw" : "full"} textAlign={"center"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
      
      <Box my="2">
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Additional Listening
      </Text>
      <Box>

      <Highlight imgsrc={daishamcbride} title="Daisha McBride" descrip="One last artist I'd like to bring attention to is Daisha McBride, known on social media as The Rap Girl. McBride gained popularily from posting fresstyle videos she recorded in her Middle Tennessee State University dorm room. She moved from Knoxville to Murfreesboro (where MTSU is located) to Music City to make it fulltime and collaborate with local MC's."
      linkdescrip={"Nerve"}
      linker={"https://www.youtube.com/watch?v=kUEKsJKOF7w"}/>
      </Box>
      <Text fontSize={"2xl"}>
      Want more? Check out Nashville Hip-Hop, A Playlist by NPR Music:
      </Text>
      </Box>
      
      <Center>
      

      <Spotify  link="https://open.spotify.com/playlist/45v4WDYwswAax2rcjD2An2?si=dc400781d2ac4e75" />
      </Center>

      </Box>)
}

export default AdditionalListening