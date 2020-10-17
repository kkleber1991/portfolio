import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Text } from '@chakra-ui/core';
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
                <TabList mb="1em">
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack>
                            <IoIosHome size={35} />
                            <Text>Home</Text>
                        </VStack>
                    </Tab>
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack><SiAboutDotMe size={35} />
                            <Text>Sobre</Text></VStack></Tab>
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack><GoProject size={35} /><Text>Projetos</Text>
                        </VStack>
                    </Tab>
                    <Tab
                        _selected={{ color: "#FEAE0B", bg: "white" }}>
                        <VStack><AiOutlineContacts size={35} /><Text>Contato</Text>
                        </VStack>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <MyPage />
                    </TabPanel>
                    <TabPanel>
                        <Sobre />
                    </TabPanel>
                    <TabPanel>
                        <Portfolio />
                    </TabPanel>
                    <TabPanel>
                        <Contato />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
