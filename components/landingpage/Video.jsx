import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
const Video = () => {
  return (
    <Box px={{ base: "31px", md: "11px" }}>
      <Flex
        mx="auto"
        maxW="1200px"
        flexDir={{ base: "column", md: "row" }}
        gap="30px"
      >
        <Box w={{ base: "100%", md: "50%" }}>
          {/* <Image
            mx="auto"
            src="/landingpage/youtube.svg"
            alt="Youtube Video"
            maxW="617px"
            w="100%"
          /> */}

          <Box maxW="617px" borderRadius={["10px", "40px"]} overflow="hidden">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/svMvkLFKU_Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
        <Flex w={["100%", "50%"]} justify="center" align="center">
          <NextLink href="https://wa.me/message/JX5ANIYU4LFCK1" passHref>
            <Link _hover={{ bg: "transparent", textDecoration: "none" }}>
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
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Video;
