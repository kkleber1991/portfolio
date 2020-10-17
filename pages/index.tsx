import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import Home from '../components/Home'

function pages() {
  return (
    <Flex maxW="100%" justify="center">
      <Box w="90%" pt={8} ><Home /></Box>
    </Flex>
  );
}

export default pages;