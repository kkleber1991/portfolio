import React from 'react';
import { Flex, Box, Image } from '@chakra-ui/core';
import Home from '../components/Home'

function pages() {
  return (
    <Flex maxW="100%" justify="center">
      <Image
      src="../assets/background.jpg"
      fallbackSrc="sldkfj.com/200x200" />
      <Box w="90%" pt={8} ><Home /></Box>
    </Flex>
  );
}

export default pages;