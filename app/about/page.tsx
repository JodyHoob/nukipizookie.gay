"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, Separator, Stack, Text, } from "@chakra-ui/react";
import { Epilogue } from "next/font/google"



export default function About() {
  return (
    <Container maxW="full" px={0} bg="bg.card" height="70vh" borderRadius="4xl">
      
      <Center>
        <Box fontSize={20} py="1vh" w="full" width="53vw">  
          
            <Text textAlign="left">
              I'm a Software Engineering student looking to shift my Career to combine Music, Animation, Digital Art and Technology.
            </Text> 
               
        </Box>
      </Center> 
      
      
        
    </Container>
  );
}