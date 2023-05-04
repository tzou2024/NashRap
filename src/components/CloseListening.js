import React from 'react'
import {
    useMediaQuery,
    Box,
    Text,
    Flex
} from '@chakra-ui/react'

const CloseListening = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Flex borderBottom={"8px solid grey"} py="4" w={isLargerThanLG ? "60vw" : "full"} textAlign={"center"} alignItems={"center"} flexDir={"column"}>
    <Text fontSize="3xl" fontWeight={"bold"} rowGap={"10px"}>
    Contextualization
    </Text>
    <Text>
    I think another part of what makes Nashville Hip-Hop truly Nashvillian is how the artists are conscious about their roots. Hip-Hop can be powerful when artists call out their background in their lyrics, and bring attention ideas and issues they care about. Take for example lyrics from <i>A Cashville Story</i> by Brian Brown of the BlackCity Collective:
    
    </Text>
    <Box w={isLargerThanLG ? "30vw" : "50vw"} justifyItems={"center"}  py="5">
    
    
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    "
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    A Cashville story, uh
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    ...
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    Recently, I went back home
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    I look around and got a frown
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    Everywhere a nigga go? It's
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    still the same shit going down
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    Gentrified my side, wanna take
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    us out? Sweep us under the rug?
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    We too dirty, dirty for that, we
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    left that stain, you stuck with us
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    ...
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    Alright, I'll be next, look
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    Headphones in, backpack on
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    as I roam around the city that I call home
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    Look how much it's grown
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    Look at all dis change... but
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    how much is it really worth
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    when the mayor fucking off
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    with ya tax money? Funny
    </Text>
    <Text fontSize="xl" fontWeight={"bold"} background="yellow">
    "
    </Text>
    </Box>
    <Text>
    This is just one example of artists speaking on issues that pertain to both indivuals and a broader community. Nashville is one of the fastest growing cities in America, but with that comes issues for the residents that were already there. East Nashville residents are being forced out due to skyrocketing housing and rent prices. More and more million dollar homes are being built often being bought by rich white moving into the area. With gentrification comes a host of other problems, like microaggressions, tax hikes, and over-policing of minorities. As a minority resident who grew up in Franklin and Nashville, I can certaintly validate some of the systemic injustices that other residents surely relate to. While it might be painful, I think it's incredibly powerful to have local artists using their platform to create a voice for local and global change.
    </Text>

    
    </Flex>
  )
}

export default CloseListening