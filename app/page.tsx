"use client"

import { Container, Box, Heading, Center, Image, VStack } from "@chakra-ui/react";
//import { Provider } from "./provider";
import Navbar from "@/components/ui/navbar";
import { Epilogue } from "next/font/google"

const epilogue = Epilogue({ 
  weight: "700"
});

export default function Home() {
  return (
    <Container maxW="full" px={0} >

        <Heading size="4xl" className={`text-center ${epilogue.className}`}>
          Test
        </Heading>


    </Container>
  );
}
