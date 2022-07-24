import { Box, Button, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const serviceDetails = [
  {
    title: "Creative Solution",
    des: "There is always an idea, or some new picture running through my head for your book cover design.",
  },
  {
    title: "Unlimited Revision",
    des: "Not only do i design your book cover but will work with you till the book get published.",
  },
  {
    title: "On Time Delivery",
    des: "Deliver on time as promised but time for delivery depends on your needs.",
  },
  {
    title: "Not a Robot",
    des: "You don't talk to robot, as we get to discuss about your project through chat, voice or video call. ",
  },
];

const Service = () => {
  return (
    <Box
      mx="auto"
      maxW="1200px"
      px={{ base: "31px", md: "11px" }}
      py={["31px", "47px"]}
      mt={{ base: "85px", md: "120px" }}
      id="service"
    >
      <Text
        as="h3"
        fontWeight="800"
        fontSize={{ base: "24px", md: "48px" }}
        maxWidth={{ base: "100%", md: "364px" }}
        lineHeight="58px"
      >
        <Text as="span" color="brand.yellow">
          WHY CHOOSE
        </Text>{" "}
        OLADELE
      </Text>

      <Box mt={{ base: "48.77px", md: "67.11px" }}>
        <Flex flexWrap="wrap" gap={{ base: "70px", md: "90px" }}>
          {serviceDetails.map(({ title, des }, i) => {
            return (
              <Box maxWidth="480px" key={i} mx="auto">
                <Image
                  w={{ base: "36px", md: "78px" }}
                  h={{ base: "36px", md: "78px" }}
                  src={`/landingpage/service${i + 1}.svg`}
                  alt="dsd"
                />
                <Text
                  fontWeight="700"
                  mt="25px"
                  fontSize={{ base: "20px", md: "38px" }}
                >
                  {title}
                </Text>
                <Text fontWeight="400" fontSize={{ base: "14px", md: "24px" }}>
                  {des}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box mt={["22px", "53px"]} w="full">
        <NextLink href="https://wa.me/message/JX5ANIYU4LFCK1" passHref>
          <Link _hover={{ bg: "transparent", textDecoration: "none" }}>
            <Button
              borderRadius="70px"
              border="1px"
              borderColor={["brand.yellow", "brand.brown"]}
              background="transparent"
              color="#000"
              w="100%"
              display="block"
              maxW="493px"
              mx="auto"
              mt={["24px", "32px"]}
              h={{ base: "52px", md: "84px" }}
              _hover={{ bg: "transparent" }}
              _focus={{ bg: "transparent" }}
              fontSize={{ base: "13px", md: "24px" }}
            >
              READY TO GET A BOOK COVER NOW
            </Button>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Service;
