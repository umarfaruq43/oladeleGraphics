import {
    Box,
    Button,
    Heading,
    Image,
    SimpleGrid,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const PaymentProve = () => {
    return (
        <Box mt="64px">
            <ScreenWidth>
                <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    textAlign="center"
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
                        Prove screenshot of payments
                    </Text>
                </Heading>

                <Box mt="64px">
                    <SimpleGrid columns={[1, 2, 3]} gap="16px">
                        <Image
                            src="/design_class/screenShot1.jpeg"
                            alt="payment screenshot"
                        />
                        <Image
                            src="/design_class/screenShot2.jpeg"
                            alt="payment screenshot"
                        />
                        <Image
                            src="/design_class/screenShot3.jpeg"
                            alt="payment screenshot"
                        />
                    </SimpleGrid>
                </Box>
                <Box mt="44px">
                    <Text>
                        But you are getting access to the class for a token of…
                    </Text>

                    <Box textAlign={"center"} mt="32px">
                        <Button
                            bg={"brand.brown"}
                            color="#fff"
                            fontWeight="700px"
                            fontSize="32px"
                            px="16px"
                            py="32px"
                            _hover={{ bg: "brand.brown" }}
                            _active={{ bg: "brand.brown" }}
                        >
                            #10,500 only.
                        </Button>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default PaymentProve;
