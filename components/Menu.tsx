import { Text, Box, Button, IconButton, Stack, VStack, Image, Switch, Icon, HStack, Center, useDisclosure } from "@chakra-ui/core"
import React from "react";
import { BsFillBrightnessHighFill, BsList, BsMoon, BsPlus } from "react-icons/bs";
import Disfar from "./disfar/Disfar"

const Menu = () => {
  return (
    <VStack pb={6}>
      <HStack bg="#FF69B4" w="100%" p={4} h="70px">
        <IconButton variant="ghost" color="white" aria-label="Search database" icon={<BsList size={30} />} />
        <Box w="100%">
          <Center>
            <Image
              boxSize="70px"
              src="https://capricho.abril.com.br/wp-content/uploads/2017/07/testes2.png" /></Center>
        </Box>
        <Stack direction="row">
          <Icon as={BsFillBrightnessHighFill} boxSize={25} color="white" />
          <Switch size="lg" colorScheme="pink" />
          <Icon as={BsMoon} boxSize={25} color="black" />
        </Stack>
        {/* <Button leftIcon={<BsPlus style={{marginLeft:"4.5"}} />} colorScheme="pink" variant="solid">
          <Text m={1}>Criar Anúncio</Text>
  </Button> */}
        {/* <Box>
          <Button 
          colorScheme="blue" 
          variant="outline" 
          position="fixed" 
          bottom={[100,80,60,1]} left="2" 
          zIndex="999"
          // onClick={<Disfar />}
          > Modo Evolução </Button>
        </Box> */}
      </HStack>
    </VStack>
  )
}

export default Menu;


// endereço da imagem https://capricho.abril.com.br/wp-content/uploads/2017/07/testes2.png

