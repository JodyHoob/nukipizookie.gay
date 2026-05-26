import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlusRounded1c = M_PLUS_Rounded_1c({ 
  weight: "700"
});

const Logo = () => {
  return (
    <Box bg="whiteAlpha.500" p={1} borderRadius={"sm"} style={{ zIndex: 1 }}>
      <HStack >
        <Image src="/Logo.png" alt="Logo" height="40px" />
        <Text fontSize="lg" fontWeight="bold" color="black" className={`text-center ${mPlusRounded1c.className}`}>
          Jody Niko Kohlbacher
        </Text>
      </HStack>
    </Box>
  );
};

export default Logo;