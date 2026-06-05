import { HStack, VStack, Link, Button, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./color-mode"
import { Epilogue } from "next/font/google";
import { Bold } from "lucide-react";
//import { Link } from "react-router-dom";

const epilogue = Epilogue({ 
  weight: "700"
});

const MenuLinks = ({ isMobile = false }) => {
  const LinkComponent = isMobile ? VStack : HStack;

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center"> 
      
      <ColorModeButton />

      <Link /*href="https://ko-fi.com/eldwretch" target="_blank"*/>
        <Button
        bg="orange.400"
        variant="solid"
        size="sm"
        fontSize={20}
        borderRadius="full"
        px={6}
        _hover={{
          transform: "translateY(-2px)",
          shadow: "lg",
        }}
        transition="all 0.2s ease"
        className={`text-center ${epilogue.className}`}
        >
          <Text color="black">
            Like what you see? Support my work!
          </Text>
        </Button>
      </Link>

    </LinkComponent>
  );
};

export default MenuLinks;