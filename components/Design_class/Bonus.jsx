import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Bonus = () => {
    return (
        <Box mt="62px" py="32px">
            <ScreenWidth>
                <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    textAlign={"center"}
                    mb="50px"
                >
                    <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                            content: "''",
                            width: "full",
                            height: useBreakpointValue({
                                base: "20%",
                                md: "30%",
                            }),
                            position: "absolute",
                            bottom: 1,
                            left: 0,
                            bg: "brand.yellow",
                            zIndex: -1,
                        }}
                        textTransform="uppercase"
                        color="brand.brown"
                    >
                        Bonus
                    </Text>
                </Heading>
                <Flex
                    justifyContent={"space-between"}
                    gap="32px"
                    // align={"center"}
                    flexDir={["column", "row"]}
                >
                    <Box shadow={"md"} w={["100%", "50%"]} p="8" fontSize={["20px"]} fontWeight="bold" bgColor={"brand.brown"} color="brand.white" borderRadius={"8px"}>
                        A FREE one-day webinar on how to run a design business
                        that fetches you a huge sum of money between N100,000 to
                        N300,000 Naira Monthly.
                    </Box>

                    <Box shadow={"md"} w={["100%", "50%"]} p="8" fontSize={["20px"]} fontWeight="bold" bgColor={"brand.brown"} color="brand.white" borderRadius={"8px"}>
                        A support community to help you with any issue
                        concerning book cover design.
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Bonus;
