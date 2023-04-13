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

const Contemporary = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

    return (
      <Box w={isLargerThanLG ? "60vw" : "full"} textAlign={"center"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
      
      <Text fontSize={"5xl"} fontWeight={"bold"}>
      Contemporary Artists
      </Text>

      <Box>
      Despite several brightspots, Nashville hip-hop has never fully broken into the mainstream. But, that doesn't mean that it has settled back into the background. In fact, there has been a rebirth of Hip-Hop identity in Nashville, with several artists and collectives making a name for themselves locally.


      </Box>
      <Box>
      <Text fontSize={"3xl"} fontWeight={"bold"} py='4'>
      Collectives
      </Text>
      <Text>
      First, I wanted to touch on a couple of artist collectives creating a community in the Nashville Hip-Hop world. By most accounts, Freedom Fest in 2015 was where the resurgance started. BlackCity was formed after Artist Sean Smith, AKA The BlackSon, alongside brother Mychael Carney, connected with future manager Justin Causey at a Freedom Fest afterparty to start and grow the BlackCity Collective. Since then, the group has added several new artists to live in the crew house "The Compound", including Reaux Marquez and Brian Brown. 

      </Text>
      <Highlight imgsrc={blackcity} title="BlackCity" descrip="Blackcity has pushed Black economic empowerment in their work, and fight for a rightful share of a Nashville that has disproportionately benefited white businesses and residences. 
      'We have a little phrase: free power — the idea of a free power source and people being able to exist empowered and not over or under the power of anything else. We talking about Black Wall Street; we talking about Tulsa. When we talk about BlackCity, that's what we're saying, is it's only right that we all just get the opportunity to build and create for ourselves, you know?'"
      linkdescrip={"A Cashville Story by Brian Brown"}
      linker={"https://www.youtube.com/watch?v=iB99jRmKGa8&list=PLLpyd70ADylcvdWtSml3qXq8OCL7QvQlB&index=2"}/>

      </Box>

      <Box>
      <Text>
      Several more collectives cover the Nashville Hip Hop Landscape. Within each of these collectives, each artist has their own work, but what I personally appreciate is the sense of identity, pride, and community that is fostered when these talented artists come together to grow alongside eachother.
      </Text>

      <Highlight imgsrc={sixone} title="Six One Tribe" descrip = "Another artist collective making waves in Nashville Hip Hop is the group of nearly 30 rappers, singers, and producers, most prominantely including Gee Slab, Corduroy Clemens, Negro Justice, Riø Tokyo, Weston and Namir Blade, who come together to form Six One Tribe. Their headquarters is Inglewood studio in Riverserside Village, and through their 'Tribe Sessions', have become known as one of the defining sounds of Nashville Hip-Hop."
      linker={"https://www.youtube.com/watch?v=dMhXDxgo6rU&t=6s"}
      linkdescrip={"Sky is Not the Limit"} />

      <Text fontSize={"3xl"} fontWeight={"bold"}>
      LoveNoise and ThirdEye & Co
      </Text>
      <Text>
      LoveNoise is a more conscious hip-hop neo-soul collective trying to make room in a space dominated by country and industry pop. Started by Shannon Sanders, neo-soul artist India.Arie, and Erik Holt. Holt says, "Everyone talks about this: If you're talented in urban music or Black music, the first thing you need to do, if you're living in Nashville, is to move to LA, New York or Atlanta. And we are really trying to change that narrative." 


      </Text>


      <Text>
      
      </Text>

      <Highlight imgsrc={thirdeye} title="ThirdEye & Co" descrip="ThirdEye & Co is the group of Chuck Indigo, $hrames, Demo, and Jody Joe among others, who are demanding attention through their live showcases. Whether it be at The Dive Motel, Exit/In, the artists are performers through and through, and give it their all for anyone that shows up to their live act." 
      linkdescrip={"Third Eye & Co Live at The Dive"}
      linker={"https://www.youtube.com/watch?v=NYfOtlnIC8I"}/>
      </Box>


      
      <Box>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
      Other Artists
      </Text>

      <Highlight imgsrc={daishamcbride} title="Daisha McBride" descrip="Next up is Daisha McBride, know on social media as The Rap Girl. McBride gained popularily from posting fresstyle videos she recorded in her Middle Tennessee State University dorm room. She moved from Knoxville to Murfreesboro, where MTSU is located, to Music City to make it fulltime and collaborate with local MC's."
      linkdescrip={"Nerve"}
      linker={"https://www.youtube.com/watch?v=kUEKsJKOF7w"}/>
      </Box>
      <Box my="2">
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Additional Listening
      </Text>
      <Text fontSize={"2xl"}>
      Want more? Check out Nashville Hip-Hop, A Playlist by NPR Music:
      </Text>
      </Box>
      
      <Center>
      

      <Spotify  link="https://open.spotify.com/playlist/45v4WDYwswAax2rcjD2An2?si=dc400781d2ac4e75" />
      </Center>

      </Box>)
}

export default Contemporary