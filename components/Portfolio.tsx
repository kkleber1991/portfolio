import { Box, Text, SimpleGrid } from '@chakra-ui/core'
import React from 'react'

export default function Portfolio() {
    return (
        <Box bg="white" boxShadow="lg" >
            <SimpleGrid columns={2} spacingX="40px" spacingY="40px" p={6} >
                <Box>
                    <Box backgroundImage="url('/images/efop.png')" h={[80,140,190,240]} bgSize="100%">
                    </Box>
                    <Text fontWeight="bold" align="center">EFOP</Text>
                </Box>
                <Box>
                    <Box backgroundImage="url('/images/insidecontabilidade.png')" h={[80,140,190,240]} bgSize="100%">
                    </Box>
                    <Text fontWeight="bold" align="center">INSIDE CONTABILIDADE</Text>
                </Box>
                <Box>
                    <Box backgroundImage="url('/images/manualdamamae.png')" h={[80,140,190,240]} bgSize="100%">
                    </Box>
                    <Text fontWeight="bold" align="center">MANUAL DA MAMAE</Text>
                </Box>
                <Box>
                    <Box backgroundImage="url('/images/movesistemas.png')" h={[80,140,190,240]} bgSize="100%">
                    </Box>
                    <Text fontWeight="bold" align="center">MOVE SISTEMAS</Text>
                </Box>
                <Box>
                    <Box backgroundImage="url('/images/rapidopark.png')" h={[80,140,190,240]} bgSize="100%">
                    </Box>
                    <Text fontWeight="bold" align="center">RAPIDO PARK</Text>
                </Box>
            </SimpleGrid>
        </Box>
    )
}
