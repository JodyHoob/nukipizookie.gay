"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, SimpleGrid, Flex } from "@chakra-ui/react";
//import { Provider } from "./provider";
import Navbar from "@/components/ui/navbar";
import { Epilogue } from "next/font/google"

const epilogue = Epilogue({ 
  weight: "700"
});

export default function Portfolio() {
  return (
    <Container maxW="full" px={0}>

    <Box py="3vh" style={{ zIndex: 0}} bg="bg.card" borderRadius="4xl"> 
          <Flex
              as="nav"
              align="center"
              justify="space-between"
              px={{ base: 6, lg: 12 }} 
          >

            <SimpleGrid columns={3} gap="40px">
              <Box height="100" >
                <Image
                  src="/Landscape.jpeg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Cafe.png"
                  alt="Art"
                />
              </Box>
              
              <Box height="100" >
                <Image
                  src="/Kitty.png"
                  alt="Art"
                />
              </Box>
              
              <Box height="100" >
                <Image
                  src="/Hexi.png"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Snowboarder.png"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Logo.png"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/triangle.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Walking.gif"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/LilGuy.gif"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Onigiri.png"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/LilGuy.jpeg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Planty2.png"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Planty.png"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Planty3.png"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/Nyan.png"
                  alt="Art"
                />
              </Box>

              {/* <Box height="100" >
                <Image
                  src=""
                  alt="Art"
                />
              </Box> */}
            </SimpleGrid>
          </Flex>
        </Box>  

    </Container>
  );
}
