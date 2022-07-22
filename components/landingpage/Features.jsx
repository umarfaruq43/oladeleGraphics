import { Box, Image, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Features = () => {
  return (
    <Box>
      <Flex
        gap={["41px", "91px"]}
        maxW="1050px"
        my={["23px", "91px"]}
        flexWrap="wrap"
        // px={{ base:"31px", sm:"11px"}}
        flexDir={{ base: "column", md: "row" }}
        align="center"
        justify="space-around"
        mx="auto"
      >
        <Flex align="center" gap="14.5px" minW="148px" fontSize={["12px", "24px"]}>
          <Box>
            <Image
              w={["34px", "76px"]}
              h={["34px", "76px"]}
              src="/landingpage/excellent.svg"
              alt="Ilustration"
            />
          </Box>
          <Box>
            <Text fontWeight="700">Excellent</Text>
            <Text>Communication</Text>
          </Box>
        </Flex>
        {/* Good Understanding */}
        <Flex align="center" gap="14.5px" minW="148px" fontSize={["12px", "24px"]}>
          <Box>
            <Image
              w={["34px", "76px"]}
              h={["34px", "76px"]}
              src="/landingpage/understanding.svg"
              alt="Ilustration"
            />
          </Box>
          <Box>
            <Text fontWeight="700">Good </Text>
            <Text>Understanding</Text>
          </Box>
        </Flex>

        {/* Fair Budget */}

        <Flex align="center" gap="14.5px" minW="148px" fontSize={["12px", "24px"]}>
          <Box>
            <Image
              w={["34px", "76px"]}
              h={["34px", "76px"]}
              src="/landingpage/budget.svg"
              alt="Ilustration"
            />
          </Box>
          <Box>
            <Text fontWeight="700">Fair </Text>
            <Text>Budget</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Features;
