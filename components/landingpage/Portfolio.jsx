import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Slider from "./Slider";

const Portfolio = () => {
  const router = useRouter();
  return (
    <Box mt={{ base: "75px", md: "99px" }} w="full" id="work">
      <Box maxW="1200px" mx="auto" px={{ base: "31px", md: "11px" }}>
        <Text
          as="h1"
          fontSize={{ base: "24px", md: "48px" }}
          fontWeight="800"
          maxW="420px"
        >
          SEE WHAT YOU CAN GET FROM
          <Text as="span" color="brand.yellow" fontWeight="800">
            {" "}
            OLADELE
          </Text>
        </Text>

        <Box>
          <Slider />
        </Box>

        <Button
          borderRadius="70px"
          border="1px"
          borderColor="brand.yellow"
          background="transparent"
          color="#000"
          w="100%"
          maxW="493px"
          mx="auto"
          display="block"
          mt="24px"
          h={{ base: "52px", md: "84px" }}
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
          fontSize={{ base: "13px", md: "24px" }}
          onClick={() => router.push("/work")}
        >
          SEE MORE
        </Button>
      </Box>
    </Box>
  );
};

export default Portfolio;
