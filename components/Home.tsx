import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Text, Heading } from '@chakra-ui/core';
import { IoIosHome } from "react-icons/io";
import { SiAboutDotMe } from "react-icons/si";
import { GoProject } from "react-icons/go";
import { AiOutlineContacts } from "react-icons/ai";
import MyPage from './MyPage'
import Sobre from './Sobre'
import Portfolio from './Portfolio'
import Contato from './Contato'

export default function Home() {
    return (
        <Box w="100%" mx="auto" justifyContent="center" display="flex" >
            <Tabs isFitted variant="enclosed" w="100%" >
                <TabList mb="1em" >
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack>
                            <IoIosHome size={35} color="#FEAE0B" />
                            <Text fontWeight="bold" color="#FEAE0B" >Home</Text>
                        </VStack>
                    </Tab>
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack>
                            <SiAboutDotMe size={35} color="#FEAE0B" />
                            <Text fontWeight="bold" color="#FEAE0B" >Sobre</Text>
                        </VStack>
                    </Tab>
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack>
                            <GoProject size={35} color="#FEAE0B" />
                            <Text fontWeight="bold" color="#FEAE0B" >Projetos</Text>
                        </VStack>
                    </Tab>
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack>
                            <AiOutlineContacts size={35} color="#FEAE0B" />
                            <Text fontWeight="bold" color="#FEAE0B" >Contato</Text>
                        </VStack>
                    </Tab>
                </TabList>
                <Box h={150} />
                <TabPanels>
                    <TabPanel>
                        <Box h={15} bg="#FEAE0B" />
                        <MyPage />
                    </TabPanel>
                    <TabPanel>
                        <Box h={15} bg="#FEAE0B" />
                        <Sobre />
                    </TabPanel>
                    <TabPanel>
                        <Box h={15} bg="#FEAE0B" />
                        <Portfolio />
                    </TabPanel>
                    <TabPanel>
                        <Box h={15} bg="#FEAE0B" />
                        <Contato />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
