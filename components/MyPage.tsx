import { Box, VStack, Text, Heading, HStack, Tabs, Tab, TabList, TabPanel, TabPanels, Divider } from '@chakra-ui/core'
import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { IoIosCreate } from 'react-icons/io'
import { SiGoogleadsense } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'

export default function MyPage() {
    return (
        <HStack
            align="center"
            w="100%"
            mx="auto"
            justifyContent="center"
            display="flex"
            bg="white"
            boxShadow="lg" >
            <VStack>
                <Divider py={3} />
                <Text >Se você precisa criar um Site, Anunciar no Google ou Facebook, eu tenho a solução ideal para você.</Text>
                <Divider py={3} />
                <HStack w="100%">
                    <Box w="100%" mx="auto" justifyContent="center" display="flex" align="center" >
                        <Tabs isFitted variant="enclosed" w="100%">
                            <TabList mb="1em">
                                <Tab _selected={{ color: "#FEAE0B", bg: "white" }}><VStack><AiFillFacebook size={35} /><Text>Facebook ADS</Text></VStack></Tab>
                                <Tab _selected={{ color: "#FEAE0B", bg: "white" }}><VStack><SiGoogleadsense size={35} /><Text>Google ADS</Text></VStack></Tab>
                                <Tab _selected={{ color: "#FEAE0B", bg: "white" }}><VStack><CgWebsite size={35} /><Text>Sites</Text></VStack></Tab>
                                <Tab _selected={{ color: "#FEAE0B", bg: "white" }}><VStack><IoIosCreate size={35} /><Text>Logotipos</Text></VStack></Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <VStack>
                                        <Heading>Atraia mais clientes com Facebook Ads</Heading><br />
                                        <Text>
                                            Com mais de 400 milhões de usuários, todos os dias milhares de pessoas estão atrás de novidades,
                                            oportunidades e ao mesmo tempo se relacionando com amigos, parceiros e clientes por meio dessas mídias.
                                            Por isso, estar presente e anunciar sua empresa no Facebook se tornou uma necessidade para conquistar mais
                                             clientes e reconhecimento. <br /> <br />

                                            Uma das grandes vantagens do Facebook Ads, é a possibilidade de segmentação que ele oferece.
                                            Conseguimos anunciar para a pessoa certa que deseja comprar seu serviço ou produto.
                        </Text>
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <VStack>
                                        <Heading>Atraia mais clientes com Google Ads</Heading><br />
                                        <Text>
                                            Anuncie na ferramenta Número #1 em Vendas na Internet.
                                        Exiba seus anúncios na hora certa para os seus clientes potenciais quando eles procurarem seus serviços e produtos no Google. <br />
                                        Aumente o número de clientes, ligações e vendas com anúncios inteligentes focados em conversão. <br /> <br />
                                        Criamos e Otimizamos sua campanha de anúncios para obter os melhores resultados com o melhor custo x benefício
                                        </Text>
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <VStack>
                                        <Heading>Criação de sites inteligentes</Heading><br />
                                        <Text>
                                            Não importa o tamanho da sua empresa: Ter um site profissional é fundamental para trazer mais clientes.
                                            Se você está apenas começando seu negócio ou já tenha uma empresa estabelecida,
                                            é fundamental ter um site profissional,
                                            otimizado para o Google e que funciona em celulares e tablets.
                                            O meu foco é fazer com que o seu site seja uma máquina de vendas,
                                        que traga clientes potenciais todos os dias para sua empresa. <br /><br />
                                        Criamos seu site especialmente para seu negócio,
                                        não utilizando nenhum tipo de modelo ou template pronto.
                                        Além disso, integramos seu site com as principais mídias do mercado: WhatsApp, Facebook e Instagram.
                                        Chegou a hora de ter um site profissional.
                                        É a sua chance de ter um site de Alta Qualidade com o melhor custo benefício do mercado.
                                        </Text>
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <VStack>
                                        <Heading>Criação de logotipos Profissionais</Heading><br />
                                        <Text>
                                            Dê uma nova imagem para seu negócio.
                                            Com experiência de mais de 15 anos e mais de 3000 logotipos criados,
                                        posso ajudar você a ter o melhor logotipo para sua empresa.<br /><br />
                                        Ter um Logotipo Profissional que transmita qualidade e confiança ao seu cliente,
                                        é fundamental para que sua empresa tenha sucesso.
                                        Não basta criar qualquer logotipo e muito menos pegar logotipos prontos.
                                        Sua empresa precisa de um logotipo exclusivo, f
                                        eito sob medida para atingir o seu cliente e ajudar você a vender mais!<br /><br />
                                        Além de Logotipo, também desenvolvemos Banners para Lojas Virtuais e Slides para Apresentação da sua Empresa.
                                        </Text>
                                    </VStack>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </HStack>
            </VStack>
        </HStack>
    )
}
