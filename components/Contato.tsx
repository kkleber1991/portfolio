import { Button, Text, Box, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Input, InputGroup, InputLeftElement, FormControl, FormHelperText, FormLabel, Textarea, Spacer } from '@chakra-ui/core'
import React from 'react'
import DDD from './DDD'

export default function Contato() {
    return (
        <Box boxShadow="lg" >
        <VStack bg="white" display="flex" >
            <Box>
                <Text fontWeight="bold" fontSize={45} color="#FEAE0B" >
                    Formulário para contato
                </Text>
            </Box>
            <Box w="100%" maxW={450} ><FormControl id="name">
                <FormLabel fontWeight="bold" >Nome:</FormLabel>
                <Input type="name" />
            </FormControl></Box>
            <Box textAlign="start" w="100%" maxW={450}><Text fontWeight="bold" >
                Selecione o DDD e a cidade:
            </Text>
                <DDD /></Box>
            <Box w="100%" maxW={450} ><FormControl id="phone">
                <FormLabel fontWeight="bold" >Telefone ou WhatsApp</FormLabel>
                <Input type="email" />
            </FormControl></Box>
            <Box w="100%" maxW={450} ><FormControl id="email">
                <FormLabel fontWeight="bold" >Email:</FormLabel>
                <Input type="email" />
            </FormControl></Box>
            <Box w="100%" maxW={450} ><FormControl id="text">
                <FormLabel fontWeight="bold" >Em que posso ajudar:</FormLabel>
                <Textarea />
            </FormControl></Box>
            <Button borderRadius={90} w="100%" maxW={450} bg="#FEAE0B" size="lg">Enviar formulário</Button>
        </VStack >
        </Box>
    )
}
