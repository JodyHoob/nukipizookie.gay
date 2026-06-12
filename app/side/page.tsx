"use client"

import { Container, Box, Heading, Center, Image, VStack, HStack, Tabs, Separator, Stack, Link, Button } from "@chakra-ui/react";
import { Epilogue } from "next/font/google"

import Logo from "@/components/ui/logo";
import MobileDrawer from "@/components/ui/mobileDrawer";
import MenuLinks from "@/components/ui/menuLinks";
import SupportButton from "@/components/ui/supportButton";
import { ColorModeButton } from "@/components/ui/color-mode";

const epilogue = Epilogue({ 
  weight: "700"
});

export default function Side() {
  return (
    <Container maxW="full" px={0} >
        <center>

            <VStack gap="2" >
                
                    <Box borderWidth="thick" borderRadius="full" borderColor="" boxSize="50%">
                        
                        <Image
                            src="/Photo.jpeg"
                            boxSize="100%"
                            //height="50%"
                            //width="50%"
                            borderRadius="full"
                            fit="cover"
                        />
                    </Box>

                    <Box fontSize={25}>
                        <h1 className={`text-center ${epilogue.className}`}>Jody Niko</h1>
                    </Box>

                    <Box px="10%" fontSize={15}>
                        <p className={`text-center ${epilogue.className}`}>
                            (They/It)
                        </p>
                    </Box>

                    <Separator width="15vw" height="1vh"></Separator>

                    <Box>
                        <SupportButton></SupportButton>
                    </Box>
            </VStack>
        </center>
    </Container>
  );
}