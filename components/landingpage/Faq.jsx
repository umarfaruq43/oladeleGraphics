import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  const faqQue = [
    {
      que: "Section 1 title",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      que: "Section 1 title",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      que: "Section 1 title",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      que: "Section 1 title",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Box maxW="1200px" mx="auto" mt="80px" px={["31px", "11px"]}>
      <Text as="h3" fontSize={["20px", "36px"]} fontWeight="700" mb="30px">
        {" "}
        FREQUENTLY ASKED{" "}
        <Text as="span" color="brand.yellow">
          QUESTIONS
        </Text>{" "}
      </Text>

      <Box border="1px" borderRadius={["10px","30px"]} overflow="hidden">
        <Accordion allowToggle>
          {faqQue.map(({ que, ans }, i) => {
            return (
              <AccordionItem
                key={i}
                borderColor="brand.brown"
                _first={{ borderTop: "none" }}
                _last={{ borderBottom: "none" }}
              >
                <h2>
                  <AccordionButton px={["20px", "70px"]}>
                    <Box
                      flex="1"
                      textAlign="left"
                      py={["13px","24px"]}
                      fontSize={["14px", "20px"]}
                      fontWeight="500"
                    >
                      {i + 1}. {que}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px={["20px", "70px"]}>
                  {ans}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
      <Box mt={["45px", "36px"]} mb="110px">
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
        >
          QUICKLY GET MY BOOK COVER DONE
        </Button>
      </Box>
    </Box>
  );
};

export default Faq;
