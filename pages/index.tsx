import React from 'react';
import { Flex, Box, Image, Spacer } from '@chakra-ui/core';
import Home from '../components/Home'
import Footer from '../components/Footer';

function pages() {
  return (
    <Box
      h={450}
      bgSize="180%"
      backgroundImage="url('/images/background.jpg')"
      backgroundPosition="center"
      bgRepeat="no-repeat" >
      <Flex maxW="100%" justify="center" >
        <Box w="100%" pt={8} ><Home /></Box>
      </Flex>
      <Spacer h={55} />
      <Footer />
    </Box>
  );
}

export default pages;