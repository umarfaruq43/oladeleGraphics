import { Box, Flex, Text, Image, Button, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NextLink from "next/link";

const Hero = () => {


  return (
    <Box
      overflow="hidden"
      id="home"
      bgImage={["/landingpage/bghero2.svg", "/landingpage/bghero.svg"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      mt={{ base: "6px", md: "50px" }}
    >
      <Flex
        maxWidth="1200px"
        mx="auto"
        pl={["31px", "11px"]}
        flexDir={["column", "row"]}
      >
        <Flex w={{ base: "65%", md: "50%" }} justify="center">
          <Box maxW="471px" py={{ base: "18px", md: "41px" }}>
            <Text
              as="h3"
              fontWeight="500px"
              fontSize={["12px", "24px", "32px"]}
            >
              Possibly the most talented and affordable
            </Text>
            <Flex>
              <Text
                fontWeight="900"
                fontSize={["96px", null, "200px"]}
                lineHeight={["80px", "160px"]}
                ml={["-10px", null, "-17px"]}
                color="brand.yellow"
                // textShadow="  brand.textShadow"
                textShadow=" brand.textShadow"
                style={{ textShadow: "20px 2px 15px rgba(0, 0, 0, 0.5)" }}
                zIndex={20}
              >
                B
              </Text>
              <Text
                display="inline-block"
                fontWeight="900"
                fontSize={["110px", "null", "250px"]}
                lineHeight={["80px", "160px"]}
                color="brand.brown"
                // textShadow="  brand.textShadow"
                textShadow=" brand.textShadow"
                style={{ textShadow: "20px 2px 15px rgba(0, 0, 0, 0.5)" }}
                ml={["-16px", "-30px"]}
                mt={["-10px", null, "-20px"]}
                zIndex="15"
              >
                o
              </Text>
              <Text
                display="inline-block"
                fontWeight="900"
                fontSize={["110px", "null", "250px"]}
                lineHeight={["80px", "160px"]}
                color="brand.brown"
                // textShadow="  brand.textShadow"
                textShadow=" brand.textShadow"
                style={{ textShadow: "20px 2px 15px rgba(0, 0, 0, 0.5)" }}
                ml={["-14px", null, "-34px"]}
                mt={["-10px", null, "-20px"]}
                zIndex="10"
              >
                o
              </Text>
              <Text
                fontWeight="900"
                fontSize={["96px", null, "200px"]}
                lineHeight={["80px", "160px"]}
                color="brand.yellow"
                // textShadow="  brand.textShadow"
                textShadow=" brand.textShadow"
                style={{ textShadow: "20px 2px 15px rgba(0, 0, 0, 0.5)" }}
                zIndex={9}
                ml={["-14px", null, "-34px"]}
              >
                K
              </Text>
            </Flex>
            <Text
              as="h3"
              fontWeight="500px"
              fontSize={["12px", "24px", "32px"]}
            >
              cover designer ever exist.
            </Text>
            <Text
              maxW={["183px", "410px"]}
              fontSize={["10px", "16px", "24px"]}
              mt="16px"
            >
              Hit the right points for the genre by bringing your vision into a
              creative book cover within 72 hours.
            </Text>
            <NextLink href="https://wa.me/message/JX5ANIYU4LFCK1" passHref>
              <Link _hover={{ bg: "transparent", textDecoration: "none" }}>
                <Button
                  w="full"
                  maxW={["128px", null, "304px"]}
                  mt="14px"
                  borderRadius="40px"
                  fontWeight="700"
                  fontSize={["11px", null, "24px"]}
                  py="5px"
                  h={["32px", null, "68px"]}
                  border="1px"
                  borderColor="brand.brown"
                  bg="transparent"
                  textAlign="left"
                >
                  <Image
                    src="/landingpage/arrow.svg"
                    alt="arrow"
                    w={["20px", null, "45px"]}
                    h={["20px", null, "45px"]}
                    mr={["6px", null, "16px"]}
                  />
                  <Text as="span"> Get Started</Text>
                </Button>
              </Link>
            </NextLink>
          </Box>
        </Flex>
        <Box
          w={["100%", "50%"]}
          bgRepeat="no-repeat"
          bgPosition="right"
          bgSize="contain"
          textAlign="right"
          // overflow="hidden"
          position="relative"
        >
          <Image
            display={["none", "block"]}
            src="/landingpage/book2.svg"
            alt="Latest Book"
            w={["200px", "full"]}
            h={["200px", "full"]}
          />
          <Image
            display={["inline", "none"]}
            src="/landingpage/book2.svg"
            alt="Latest Book"
            maxW="200px"
            maxH="200px"
            mt="-120px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
