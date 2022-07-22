import { Flex, Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const ClientCard = ({ data }) => {
  const { name, testimony, bookImage, autorImage, countryName } = data;
  return (
    <Flex
      mx="auto"
      maxW={["256px", "500px"]}
      minH="254px"
      w="100%"
      bgColor="brand.white"
      py={["21px", "27px"]}
      px={["7px", "33px"]}
      borderRadius="20px"
      justify="space-between"
      gap={["15px", "33px"]}
    >
      <Box overflow="hidden" minW={["50px", "73px"]}>
        <Image
          src={autorImage && autorImage}
          alt="client Image"
          w={["50px", "73px"]}
          h={["50px", "73px"]}
          border="1px"
          borderRadius="full"
        />
      </Box>

      <Box>
        <Text
          fontWeight="400"
          fontSize={["12px", "16px"]}
          color="black"
          maxW="394px"
          noOfLines={[10, 5]}
        >
          {testimony && testimony}
        </Text>

        <Flex
          mt="24px"
          align={["flex-end", "center"]}
          justify="space-between"
          flexDir={["column", "row"]}
        >
          <Box>
            <Text fontWeight="700" fontSize={["14px", "16px"]}>
              {name && name}
            </Text>
            <Text fontSize={["12px", "14px"]}>
              {countryName && countryName}
            </Text>
          </Box>
          <Box overflow="hidden" textAlign="right" mt={["-20px", "0"]}>
            <Image
              src={bookImage && bookImage}
              alt=""
              w="60px"
              h="70px"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ClientCard;
