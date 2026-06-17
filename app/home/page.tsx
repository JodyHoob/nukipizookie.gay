"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, Separator, Stack, Text } from "@chakra-ui/react";
import { Epilogue } from "next/font/google"
import Scene from "@/components/ui/scene";

const epilogue = Epilogue({ 
  weight: "700"
});

export default function Homo() {
  return (
    <Container maxW="full" px={0} bg="bg.card" height="full" borderRadius="4xl">

      <Center>

        <Box fontSize={20} top="3vh" py="10px" width="53vw" h="50" borderWidth={3} borderColor="button.bg" position="relative" borderRadius="2xl">
          
          <Text textAlign="center" bg="">
            FH-Hagenberg Student aiming to transfer from Software Engineering to Media Technology and Design.
          </Text>

      </Box>

      </Center>
      
      

      <center>
        <Box h="33vh" w="33vw" py="3vh" >
          <Scene />
        </Box>
      </center>


      <Center zIndex={2}>
        <Box fontSize={18} py="1vh" width="40vw">  
          
          

          <Separator height="1vh" borderColor="button.bg"></Separator>

          
          <Text textAlign="left">
            <u>Interests:</u>
          </Text> 
          

          <br/>
          
          <VStack align="stretch" gap={4} px={8}>

            <Box display="grid" gridTemplateColumns="110px 1fr" gap={8}>
              <Text fontWeight="bold">Music</Text>
              <Text>
                I first learned music theory through playing viola in an orchestra and singing in a choir while growing up. That was a useful foundation for learning the basics of music production in FL Studio later on. I enjoy collecting a variety of digital and analog media from which I draw a lot of my inspiration from.
              </Text>
            </Box>

            <Box display="grid" gridTemplateColumns="110px 1fr" gap={8}>
              <Text fontWeight="bold">Design</Text>
              <Text> 
                Growing up I was always fascinated with character designs from different cartoons and anime, which inspired me to draw and design my own creatures. Alongside this, I continued pursuing art and creative projects, becoming more and more interested in fields such as game design, sound design, and web design. Character design has remained a constant passion throughout the years.
              </Text>
            </Box>

            <Box display="grid" gridTemplateColumns="110px 1fr" gap={8}>
              <Text fontWeight="bold">Electronics</Text>
              <Text>
                In middle school I first gained interest in enigneering and started teaching myself how to program. Because of this interest, I attended an electronics and IT high school, where I learned both hardware design and software development in more depth.
              </Text>
            </Box>         

          </VStack>

          <br/>

          <Separator height="1vh" borderColor="button.bg"></Separator>
          
          <br/>

          <Text textAlign="left">
            <u>Projects:</u>
          </Text> 

          <br/>

          <Box display="grid" gridTemplateColumns="10px 1fr" gap={1}>
            <Text fontWeight="bold">•</Text>
            <Text>
              Creation of this Portfolio website using the Next.js framework, Chakra UI and TypeScript. I'm hosting this Website using GitHub pages and a custom DNS from Namecheap.
            </Text>
          </Box>
 
          <br/>

          <Box display="grid" gridTemplateColumns="10px 1fr" gap={1}>
            <Text fontWeight="bold">•</Text>
            <Text>
              Development and building of a cow tracking device using C++, Arduino, ESP-32 and a LoRa radio module.
            </Text>
          </Box>         
        </Box>
      </Center> 
        
    </Container>
  );
}