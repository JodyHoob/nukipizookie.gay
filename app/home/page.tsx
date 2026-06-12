"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, Separator, Stack } from "@chakra-ui/react";
import { Epilogue } from "next/font/google"
import Scene from "@/components/ui/scene";

const epilogue = Epilogue({ 
  weight: "700"
});

export default function Homo() {
  return (
    <Container maxW="full" px={0}>
      <center>
        <Box h="30vh" w="50%" borderWidth="thick" borderRadius="md" borderColor="">
          <Scene></Scene>
        </Box>
      </center>
        
    </Container>
  );
}