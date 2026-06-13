"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, Separator, Stack } from "@chakra-ui/react";
import { Epilogue } from "next/font/google"
import Scene from "@/components/ui/scene";

const epilogue = Epilogue({ 
  weight: "700"
});

export default function Homo() {
  return (
    <Container maxW="full" px={0} bg="bg.card" height="70vh" borderRadius="4xl">
      <center>
        <Box h="33vh" py="3vh">
          <Scene></Scene>
        </Box>
      </center>
        
    </Container>
  );
}