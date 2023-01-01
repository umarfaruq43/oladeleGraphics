import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Payment = () => {
    return (
        <Box py="64px" bgColor={"brand.brown"} mt="64px">
            <ScreenWidth>
                <Box textAlign={"center"} color="brand.yellow">
                    <Text
                        maxW="700px"
                        mx="auto"
                        textTransform={"uppercase"}
                        fontWeight="bold"
                        fontSize={["24px", null, "32px"]}
                    >
                        So you would really want to join the class right now and
                        learn from the best.
                    </Text>

                    <Box>
                        <Button
                            mt="35px"
                            py="35px"
                            px="40px"
                            // bg={"brand.yellow"}
                            bg={"transparent"}
                            rounded={"full"}
                            fontWeight="600"
                            fontSize={["sm","2xl"]}
                            border="1px"
                            borderColor={"brand.yellow"}
                            color="brand.white"
                            _hover={{
                                // bg: "brand.yellow",
                                bg: "brand.yellow",
                                color: "brand.brown",
                            }}
                            _active={{
                                // bg: "brand.yellow",
                                // bg: "transparent",
                            }}
                            as="a"
                            href="https://selar.co/2d2r"
                            target="_blank"
                        >
                            GIVE ME THE ACCESS FOR #10,500
                        </Button>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Payment;
