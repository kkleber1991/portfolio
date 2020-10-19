import { Box, Text, Center } from '@chakra-ui/core'
import React from 'react'

export default function Sobre() {
    return (
        <Box bg="white" boxShadow="lg" >
            <Text
                align="center"
                fontSize="4xl" >Quem é
            <Text fontWeight="bold" color="#FEAE0B" >KEDLLON KLEBER</Text>
            </Text><br /><br /><br />
            <Text color="black" textAlign="center" >
                Empreendedor com mais de 8 anos de experiência em Marketing Digital.<br />
            Progamador em React, Dart e outras,
            comecei a minha carreira em 2012,
            quando criei os meus primeiros sites para pequenas
            empresas da região de Goiania-GO.
            Em 2015, comecei a ganhar destaque como freelancer no mercado,
            ganhando prêmios e desenvolvendo projetos para inúmeras agências de publicidade em todo Brasil.<br /><br /><br />

            A partir de 2018, a marca Kedllon.solutions alcançou as primeiras posições no Google
            e com isso ganhou visibilidade entre pequenas e médias empresas de todo Brasil,
            chegando hoje atingir a marca de mais de 20 projetos entregues anualmente.<br /><br /><br />

            Com o tempo, me tornei especialista e parceiro Google e Facebook,
            dando consultoria no Google Ads e Facebook Ads para várias empresas,
            atraindo mais de 1 Milhão de Leads para meus clientes.
            </Text>
        </Box>
    )
}
