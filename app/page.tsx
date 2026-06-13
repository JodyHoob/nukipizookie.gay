"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, TabsContent, Separator } from "@chakra-ui/react";
import { NavImage, Navbar } from "@/components/ui/navbar";
import { Epilogue } from "next/font/google"
import Portfolio from "./portfolio/page";
import About from "./about/page";
import Side from "./side/page"
import Homo from "./home/page";
import { ColorModeButton } from "@/components/ui/color-mode";

const epilogue = Epilogue({ 
  weight: "700"
});

export default function Home() {
  return (
    <Container maxW="full" px={0} >
        
            <VStack gap="4">
                <center>
                   <Box h="1vh" position="relative">
                      <NavImage></NavImage>
                    </Box>
                    
                </center>

                <HStack align="start" w="100%" py="72px">

                  <Box py="10vh" h="90vh" w="20%" position="sticky" top="-20">
                    <Side></Side>
                  </Box>

                  <Box /*w="100vw"*/ w="60%" pt={"12%"} position="relative">
                    <Tabs.Root 
                    px={4}
                    //minW={}
                    defaultValue="home"
                    variant="plain"
                    
                    css={{
                        fontSize: 24,
                        "--tabs-indicator-shadow": "shadows.xs",
                        "--tabs-indicator-bg": "colors.bg.muted",
                    }}
                    >
                        <HStack w="100%">
                          <ColorModeButton />
                          <Tabs.List w="100%">
                              <Tabs.Trigger value="home" color="text.button2" _selected={{ bg: "button.bg" }} className={`text-center ${epilogue.className}`} fontSize={24}>Home</Tabs.Trigger>
                              <Tabs.Trigger value="about" color="text.button2" _selected={{ bg: "button.bg" }} className={`text-center ${epilogue.className}`} fontSize={24}>About Me</Tabs.Trigger>
                              <Tabs.Trigger value="portfolio" color="text.button2" _selected={{ bg: "button.bg" }} className={`text-center ${epilogue.className}`} fontSize={24}>Portfolio</Tabs.Trigger>
                              <Tabs.Indicator />
                          </Tabs.List>
                        </HStack>

                        <Separator borderColor="button.bg"></Separator>
                        
                        
                        <Tabs.Content value="portfolio"> 
                          <Portfolio></Portfolio>
                        </Tabs.Content>
                        <Tabs.Content value="about"> 
                          <About></About>
                        </Tabs.Content>
                        <Tabs.Content value="home"> 
                          <Homo></Homo>
                        </Tabs.Content>
                    </Tabs.Root>
                  </Box>
                </HStack>

            </VStack>
    </Container>
  );
}
