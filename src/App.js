import React from 'react';
import Heading from './components/Heading';
import {
  ChakraProvider,
  Box,
  Flex,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Intro from './components/Intro';
import History from "./components/History";
import Contemporary from './components/Contemporary';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} flexDir={"column"} alignContent={"center"} alignItems={"center"}>
          <Flex justifyContent={"flex-end"}>
          <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <Heading />
          <Intro/>
          <History/>
          <Contemporary />
          {/* </VStack> */}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
