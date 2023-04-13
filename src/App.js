import React from 'react';
import Heading from './components/Heading';
import {
  ChakraProvider,
  Box,
  Flex,
  theme,
} from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools";

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Intro from './components/Intro';
import History from "./components/History";
import Contemporary from './components/Contemporary';
import Footer from './components/Footer';
import CloseListening from './components/CloseListening';
import AdditionalListening from './components/AdditionalListening';


function App() {
  // 2. Call `extendTheme` and pass your custom values

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
          <CloseListening />
          <AdditionalListening />
          {/* </VStack> */}
        </Flex>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
