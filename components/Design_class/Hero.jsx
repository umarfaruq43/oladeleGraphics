import Head from "next/head";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Image,
} from "@chakra-ui/react";
import ScreenWidth from "../../Layout/ScreenWidth";
export default function CallToActionWithAnnotation() {
    return (
        <Box
            bgImage="/bg.jpg"
            bgPosition={"center"}
            bgAttachment="fixed"
            bgSize="cover"
        >
            <Box
                bgGradient={
                    "linear(to-b, rgba(79, 71, 78, 0.9), rgba(79, 71, 78, .98))"
                }
            >
                <Image
                    src="/landingpage/logo.svg"
                    alt="logo"
                    pt={["20px", "40px"]}
                    pl={["20px", "40px"]}
                    // pl="40px"
                    w={["200px"]}
                    display={["none", , "block"]}
                    position={"absolute"}
                />
                <ScreenWidth>
                    <Box
                        textAlign={"center"}
                        py={{ base: 20, md: 36 }}
                        mx="auto"
                        // maxW="5xl"
                    >
                        <Text
                            fontWeight={700}
                            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                            lineHeight={"130%"}
                            // color="#fff"
                            color={"brand.yellow"}
                            textTransform={"uppercase"}
                        >
                            Book Cover Design {`isn't`} as complex as Other
                            fields of{" "}
                            <Text as={"span"} color={"brand.yellow"}>
                                Graphics Design
                            </Text>
                        </Text>
                        <Box
                            mt="34px"
                            maxW="1000px"
                            display={"block"}
                            textAlign="center"
                            mx={"auto"}
                            color={"brand.white"}
                        >
                            <Text
                                textAlign="center"
                                fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
                            >
                                You can{" "}
                                <Text
                                    as="span"
                                    fontWeight={"bold"}
                                    color="brand.yellow"
                                >
                                    {" "}
                                    make a huge sum of money
                                </Text>{" "}
                                between N100,000 to N300,000 Naira Monthly by
                                designing a book cover for 6 hours daily in the
                                comfort of your room.
                            </Text>
                            <Text
                                mt="30px"
                                fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
                            >
                                And you can make an eye-catching book cover that
                                best presents a book to the right audience,{" "}
                                <Text as="span" textDecor={"underline"}>
                                    even when you have little knowledge{" "}
                                </Text>{" "}
                                of Graphics Design
                            </Text>
                            {/* <Text>
                                And you can make an eye-catching book cover that
                                best presents a book to the right audience, even
                                when you have little knowledge of Graphics
                                Design
                            </Text> */}
                        </Box>

                        <Box>
                            <Button
                                mt="35px"
                                py="25px"
                                px="40px"
                                // bg={"brand.yellow"}
                                bg={"transparent"}
                                rounded={"full"}
                                fontWeight="500"
                                border="1px"
                                borderColor={"brand.yellow"}
                                color="brand.white"
                                _hover={{
                                    // bg: "brand.yellow",
                                    bg: "transparent",
                                }}
                                _active={{
                                    // bg: "brand.yellow",
                                    bg: "transparent",
                                }}
                            >
                                Get Access
                            </Button>
                        </Box>
                    </Box>
                </ScreenWidth>
            </Box>
        </Box>
    );
}
