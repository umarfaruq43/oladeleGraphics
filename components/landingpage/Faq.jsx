import {
  Box,
  Button,
  Flex,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Faq = () => {
  return (
    <Box maxW="1200px" mx="auto" mt="80px" px={["31px", "11px"]} id="faq">
      <Text as="h3" fontSize={["20px", "36px"]} fontWeight="700" mb="30px">
        {" "}
        FREQUENTLY ASKED{" "}
        <Text as="span" color="brand.yellow">
          QUESTIONS
        </Text>{" "}
      </Text>

      <Box border="1px" borderRadius={["10px", "30px"]} overflow="hidden">
        <Accordion allowToggle>
          {/* Item 1 */}
          <AccordionItem
            // key={i}
            borderColor="brand.brown"
            _first={{ borderTop: "none" }}
            _last={{ borderBottom: "none" }}
          >
            <h2>
              <AccordionButton
                _expanded={{ bg: "rgba(0, 0, 0, 0.04)", color: "brand.brown" }}
                px={["20px", "70px"]}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  py={["13px", "24px"]}
                  fontSize={["14px", "20px"]}
                  fontWeight="500"
                >
                  {/* {i + 1}. {que} */}
                  1. How much do you charge for a paperback design?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} px={["20px", "70px"]}>
              <Text>
                The number of hours that go into each project strongly depends
                on your needs and the delivered content. That’s why prices might
                vary.
              </Text>
              <Text>
                {" "}
                The happy part is that you get 5x the value of whatever you
                invest in for your book cover design.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          {/* ITEM 2 */}
          <AccordionItem
            // key={i}
            borderColor="brand.brown"
            _first={{ borderTop: "none" }}
            _last={{ borderBottom: "none" }}
          >
            <h2>
              <AccordionButton
                _expanded={{ bg: "rgba(0, 0, 0, 0.04)", color: "brand.brown" }}
                px={["20px", "70px"]}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  py={["13px", "24px"]}
                  fontSize={["14px", "20px"]}
                  fontWeight="500"
                >
                  {/* {i + 1}. {que} */}
                  2. How long does it take to get my book cover done?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} px={["20px", "70px"]}>
              <Text as="strong">72hrs.</Text>
              <Text>
                {" "}
                Yes, that’s the time limit to submit your design project.
                Although, you can request a wait and get the package which will
                attract extra charges.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* {ITEM 3} */}

          <AccordionItem
            // key={i}
            borderColor="brand.brown"
            _first={{ borderTop: "none" }}
            _last={{ borderBottom: "none" }}
          >
            <h2>
              <AccordionButton
                _expanded={{ bg: "rgba(0, 0, 0, 0.04)", color: "brand.brown" }}
                px={["20px", "70px"]}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  py={["13px", "24px"]}
                  fontSize={["14px", "20px"]}
                  fontWeight="500"
                >
                  {/* {i + 1}. {que} */}
                  3. Do you work for a foreign client?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} px={["20px", "70px"]}>
              <Text as="strong">Yes.</Text>
              <Text>
                {" "}
                I have all the possible safe and trusted channels to deliver
                your project and protect your information.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* ITEM 4 */}
          <AccordionItem
            // key={i}
            borderColor="brand.brown"
            _first={{ borderTop: "none" }}
            _last={{ borderBottom: "none" }}
          >
            <h2>
              <AccordionButton
                _expanded={{ bg: "rgba(0, 0, 0, 0.04)", color: "brand.brown" }}
                px={["20px", "70px"]}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  py={["13px", "24px"]}
                  fontSize={["14px", "20px"]}
                  fontWeight="500"
                >
                  {/* {i + 1}. {que} */}
                  4. What are the requirements needed to get started?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} px={["20px", "70px"]}>
              <OrderedList>
                <ListItem listStyleType="lower-alpha">
                  The Book Title and Subtitle
                </ListItem>{" "}
                <ListItem listStyleType="lower-alpha">
                  The Author’s Name
                </ListItem>{" "}
                <ListItem listStyleType="lower-alpha">The blurb</ListItem>{" "}
                <ListItem listStyleType="lower-alpha">
                  ther information that you need to have on the Cover.
                </ListItem>
                <ListItem listStyleType="lower-alpha">Your budget</ListItem>
              </OrderedList>
            </AccordionPanel>
          </AccordionItem>

          {/* ITEM 5 */}

          <AccordionItem
            // key={i}
            borderColor="brand.brown"
            _first={{ borderTop: "none" }}
            _last={{ borderBottom: "none" }}
          >
            <h2>
              <AccordionButton
                _expanded={{ bg: "rgba(0, 0, 0, 0.04)", color: "brand.brown" }}
                px={["20px", "70px"]}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  py={["13px", "24px"]}
                  fontSize={["14px", "20px"]}
                  fontWeight="500"
                >
                  {/* {i + 1}. {que} */}
                  5. Can I design a cover while my book is at the proofreading
                  stage?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} px={["20px", "70px"]}>
              <Text as="strong">Yes</Text>
              <Text> That’s the best to speed up the book processing.</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box mt={["45px", "36px"]} mb="110px">
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
              display="block"
              mt="24px"
              h={{ base: "52px", md: "84px" }}
              _hover={{ bg: "transparent", textDecoration: "none" }}
              _focus={{ bg: "transparent" }}
              fontSize={{ base: "13px", md: "24px" }}
            >
              QUICKLY GET MY BOOK COVER DONE
            </Button>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Faq;
