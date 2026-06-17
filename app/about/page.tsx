"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, Separator, Stack, Text, } from "@chakra-ui/react";
import { Epilogue } from "next/font/google"



export default function About() {
  return (
    <Container maxW="full" px={0} bg="bg.card" /*height="70vh"*/ borderRadius="4xl">
      
      <Center>
        <Box fontSize={20} top="3vh" py="10px" width="53vw" h="50" borderWidth={3} borderColor="button.bg" position="relative" borderRadius="2xl">
          <Text textAlign="center" bg="">
            FH-Hagenberg Student aiming to transfer from Software Engineering to Media Technology and Design.
          </Text>
        </Box>
      </Center>

      <Center>

        <Box fontSize={20} py="6vh" w="full" width="53vw" h="full" position={"relative"}>  
            <Text textAlign="left">
              When I first applied to FH Hagenberg, I chose Software Engineering because my parents believed that pursuing art would not lead to a stable future. And so, during my 2 semesters I continued working on various art related projects, drawing and designing characters as a hobby. After living on campus and developing close friendships with Media Technology Design and Digital Arts students, I became increasingly interested in their projects and collaborations. During my second semester I realized that I would be more suited for a creative field where I can combine digital art, music, animation and technology instead of purely software focused work.
              <br/>
              <br/>
              In middle school I began making my own small games in Unity and GameMaker Studio. I started with platformers and later continued with smaller top-down RPGs. Games and interactive media, rhythm games and RPGs like OneShot and Undertale for example, have been my biggest inspirations for many years. I attended Gamescom two years in a row primarily to experience new indie game demos, one of my favorites being a rhythm RPG called Nocturn. Projects like that made me realize how much I want to combine visuals, music and interesting gameplay mechanics to tell my own stories. 
              <br/>
              <br/>
              Music is also extremely important to me. I collect vinyls and have an archive of around 20,000 songs that mean a lot to me. I started making my own songs using FL Studio as an emotional outlet for myself, and want to learn more about music production for games. One of my dreams is to create my own game and compose its soundtrack myself.
              <br/>
              <br/>
              For my portfolio I created my first 2 animations using Clip Studio Paint, Krita, and my original characters. I created an old TV model in Blender. And I built my own portfolio website using Next.js, Chakra UI and TypeScript. 
              <br/>
              <br/>
              I learned a lot about programming and technical problem solving in high school and my previous jobs, and I want to continue improving my technical and artistic skills while working on creative projects with other people and learning more about game development, animation and music/sound design. My ultimate goal is to create characters, animations and music that reflect who I am and inspire people the same way games and music inspired me growing up. Because of this, I am highly motivated to learn, collaborate, and grow as a student in Media Technology and Design.
            </Text>
               
        </Box>
      </Center> 
      
      
        
    </Container>
  );
}