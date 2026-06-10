"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, Separator, Stack } from "@chakra-ui/react";
import { Epilogue } from "next/font/google"

const epilogue = Epilogue({ 
  weight: "700"
});

export default function About() {
  return (
    <Container maxW="full" px={0}>
        <Box fontSize={20}>
            <p className={`text-center ${epilogue.className}`} >
                I'm a Software Engineering student looking to shift my Career to combine Music, Animation, Digitl Art and Technology. 
            </p>
        </Box>
        
    </Container>
  );
}