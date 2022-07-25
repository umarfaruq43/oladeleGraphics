import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { BsFacebook, BsMessenger, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <Flex
      alignItems="center"
      h={["86px", "200px"]}
      bgColor="brand.brown"
      px={["31px", "11px"]}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        w="100%"
        color="brand.white"
        justify="space-between"
      >
        <Box w={["100%", "50%"]}>
          <Text
            as="h3"
            fontWeight="800"
            fontSize={["12px", "32px"]}
            mb={["6.17px", "16px"]}
          >
            CONTACTS
          </Text>
          <Box>
            <NextLink href="https://m.me/Gr8Oladele" passHref>
              <Link>
                <Icon
                  as={BsMessenger}
                  fontSize={["", "47px"]}
                  mr={["13px", "29px"]}
                />
              </Link>
            </NextLink>

            <NextLink href="https://web.facebook.com/Gr8Designer" passHref>
              <Link>
                <Icon
                  as={BsFacebook}
                  fontSize={["", "47px"]}
                  mr={["13px", "29px"]}
                />
              </Link>
            </NextLink>

            <NextLink href="https://wa.me/message/JX5ANIYU4LFCK1" passHref>
              <Link>
                <Icon
                  as={BsWhatsapp}
                  fontSize={["", "47px"]}
                  mr={["13px", "29px"]}
                />
              </Link>
            </NextLink>

            <NextLink
              href="https://www.instagram.com/oladelegraphics.com.ng/"
              passHref
            >
              <Link>
                <Icon
                  as={AiFillInstagram}
                  fontSize={["", "47px"]}
                  mr={["13px", "29px"]}
                />
              </Link>
            </NextLink>
          </Box>
        </Box>

        <Flex
          align="flex-end"
          justify="flex-end"
          position="fixed"
          zIndex={80}
          bottom="16px"
          right="16px"
        >
          <NextLink href="https://wa.me/message/JX5ANIYU4LFCK1" passHref>
            <Link>
              <Flex
                bgColor="brand.white"
                px="15px"
                py="15px"
                borderRadius="60px"
                maxW="331px"
                gap={["4px", "22px"]}
                align="center"
                cursor="pointer"
                h={["29px", "70px"]}
                maxH="70px"
                shadow="lg"
              >
                <Image
                  src="/landingpage/me.jpg"
                  w={["25px", "56px"]}
                  h={["25px", "56px"]}
                  alt="message"
                  borderRadius="full"
                />

                <Box fontSize={["10px", "12px"]} color="#000">
                  <Text fontWeight="700">Message Oladele </Text>
                  <Text noOfLines="1" display={["none", "block"]}>
                    Online. Avg. Response Time:{" "}
                    <Text as="strong" fontWeight="700">
                      30
                    </Text>{" "}
                    min.
                  </Text>
                </Box>
              </Flex>
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
