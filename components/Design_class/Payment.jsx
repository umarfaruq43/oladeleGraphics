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
                        Click the Button below to GET INSTANT ACCESS to the
                        program today!
                    </Text>

                    <Box>
                        <Button
                            mt="35px"
                            py="25px"
                            px="40px"
                            // bg={"brand.yellow"}
                            bg={"transparent"}
                            rounded={"full"}
                            fontWeight="600"
                            border="1px"
                            borderColor={"brand.yellow"}
                            color="brand.white"
                            _hover={{
                                // bg: "brand.yellow",
                                bg: "brand.yellow",
                                color: "brand.black",
                            }}
                            _active={{
                                // bg: "brand.yellow",
                                bg: "transparent",
                            }}
                            as="a"
                            href="https://selar.co/2d2r"
                            target="_blank"
                        >
                            Get Access
                        </Button>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Payment;
