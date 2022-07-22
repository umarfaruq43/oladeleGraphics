import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Video = () => {
  return (
    <Box px={{ base: "31px", md: "11px" }}>
      <Flex mx="auto" maxW="1200px" flexDir={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "" }}>
          <Image
            mx="auto"
            src="/landingpage/youtube.svg"
            alt="Youtube Video"
            maxW="617px"
            w="100%"
          />
        </Box>
        <Flex w={["100%", ""]} justify="center" align="center">
          <Button
            borderRadius="70px"
            border="1px"
            borderColor="brand.yellow"
            background="transparent"
            color="#000"
            w="100%"
            maxW="493px"
            mx="auto"
            mt="24px"
            h={{ base: "52px", md: "84px" }}
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
            fontSize={{ base: "13px", md: "24px" }}
          >
            I WANT TO GET A BOOK COVER NOW
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Video;
