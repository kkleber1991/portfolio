import { Box, Text } from '@chakra-ui/core'
import React from 'react'

export default function Footer() {
    return (
        <Box w="100%" h={65} bg="#FEAE0B" >
            <Text fontWeight="bold" align="center" pt={3} pb={2} >
            Copyright © 2020 Kedllon.Solutions | Designed by Kedllon Kleber
            </Text>
        </Box>
    )
}
