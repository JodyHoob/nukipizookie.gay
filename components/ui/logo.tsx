import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ 
  weight: "700"
});

const Logo = () => {
  return (
    <Box bg="whiteAlpha.500" p={1} borderRadius={"sm"} style={{ zIndex: 1 }}>
      <HStack >
        <Image src="/Logo.png" alt="Logo" height="40px" />
        <Text fontSize="lg" fontWeight="bold" color="black" className={`text-center ${epilogue.className}`}>
          Jody Niko
        </Text>
      </HStack>
    </Box>
  );
};

export default Logo;

/*


*/