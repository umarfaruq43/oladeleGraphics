import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box mt={["39px","85px"]} maxW="1200px" mx="auto" p={["31px", "11px"]}>
      <Flex>
        <Image
          src="/landingpage/me.jpg"
          alt="oladele Abdul hakeem"
          w={["106px", "216px"]}
          h={["106px", "216px"]}
          borderRadius="full"
          mr="30px"
        />
        <Box w="480px">
          <Text as="h3" fontWeight="800" fontSize={["16px", "32px"]}>
            Abdulhakeem Oladele
          </Text>
          <Text fontSize={["12px", "24px"]} mt="12px">
            Professionally trained graphic <br /> designer
          </Text>
          <Button
            borderRadius="10px"
            border="1px"
            borderColor="brand.yellow"
            background="transparent"
            color="#000"
            display="block"
            w={["94px", "161px"]}
            mt="3"
            h={["29px", "55px"]}
            fontSize={["12px", "24px"]}
          >
            Contact Me
          </Button>
        </Box>
      </Flex>

      <Box
        border="1px"
        borderRadius="5px"
        mt={["46px", "55px"]}
        px={["16px", "50px"]}
        py={["25px", "40px"]}
        maxW="1013px"
        mx="auto"
      >
        <Flex
          gap={["", "", "265px"]}
          mb="13px"
          justify={["space-between", "normal"]}
        >
          <Box>
            <Text fontWeight="500px" fontSize={["12px", "24px"]}>
              From
            </Text>

            <Text as="strong" fontWeight="700px" fontSize={["12px", "24px"]}>
              Nigeria
            </Text>
          </Box>

          <Box>
            <Text fontWeight="500px" fontSize={["12px", "24px"]}>
              Language
            </Text>

            <Text as="strong" fontWeight="700px" fontSize={["12px", "24px"]}>
              English/Yoruba
            </Text>
          </Box>
        </Flex>

        <Flex
          gap={["", "", "143px"]}
          mb="26px"
          justify={["space-between", "normal"]}
        >
          <Box>
            <Text fontWeight="500px" fontSize={["12px", "24px"]}>
              Avg. response time
            </Text>

            <Text as="strong" fontWeight="700px" fontSize={["12px", "24px"]}>
              30 minutes
            </Text>
          </Box>

          <Box>
            <Text fontWeight="500px" fontSize={["12px", "24px"]}>
              Experience level
            </Text>

            <Text as="strong" fontWeight="700px" fontSize={["12px", "24px"]}>
              Expert
            </Text>
          </Box>
        </Flex>

        <Divider />

        <Box fontWeight="400" fontSize={["12px", "24px"]} mt="17px" maxW="897px">
          <Text>
            Passionate artist made into a professional Graphic Designer with 3
            years of experience in book cover design.
          </Text>
          <Text mt="20px">
            Collectively creating comprehensive visual solutions for clients. I
            help you bring bold and meaningfull looks to your book.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
