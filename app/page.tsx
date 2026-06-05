"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs } from "@chakra-ui/react";
import { NavImage, Navbar } from "@/components/ui/navbar";
import { Epilogue } from "next/font/google"
import Portfolio from "./portfolio/page";

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
                    <Box maxW="full">
                    <   Navbar></Navbar>
                    </Box>
                </center>

                <HStack>
                  <Box w="100vw" pt={"12%"} position="relative">
                    <Tabs.Root 
                    px={4}
                    //minW={}
                    defaultValue="home"
                    variant="line"
                    className={`text-center ${epilogue.className}`}
                    
                    css={{
                        fontSize: 24,
                        "--tabs-indicator-bg": "colors.gray.subtle",
                        "--tabs-indicator-shadow": "shadows.xs",
                    }}
                    >
                        <Tabs.List>
                            <Tabs.Trigger value="home" className={`text-center ${epilogue.className}`} fontSize={24}>Home</Tabs.Trigger>
                            <Tabs.Trigger value="about" className={`text-center ${epilogue.className}`} fontSize={24}>About Me</Tabs.Trigger>
                            <Tabs.Trigger value="portfolio" className={`text-center ${epilogue.className}`} fontSize={24}>Portfolio</Tabs.Trigger>
                            <Tabs.Indicator />
                        </Tabs.List>
                        <Tabs.Content value="portfolio"> 
                          <Portfolio></Portfolio>
                        </Tabs.Content>
                    </Tabs.Root>
                  </Box>
                </HStack>

            </VStack>

  
    </Container>
  );
}
