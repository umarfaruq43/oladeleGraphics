import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Package = () => {
    return (
        <Box>
            <ScreenWidth maxW={"7xl"} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={"center"}>
                    <Heading color="brown">Our Packages</Heading>
                    <Text bgColor={"fadeBg"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, expedita.
                    </Text>
                </Stack>

                {/* coliumn 1 */}
                <Flex gap="30px" flexDir={["column", "row"]}>
                    <Flex w={["100%", "50%"]} align="center" justify={""}>
                        <Image
                            src=""
                            w="100%"
                            h="400px"
                            alt=""
                            objectFit={"cover"}
                            fallbackSrc="https://via.placeholder.com/450"
                        />
                    </Flex>
                    <Box w={["100%", "50%"]}>
                        <Text
                            fontSize={""}
                            p="10px"
                            borderLeft={"2px"}
                            borderColor={"yellow"}
                            fontWeight={"700"}
                        >
                            INTRODUCE PACKAGE ONE
                        </Text>
                        <Text
                            fontWeight={700}
                            mt="20px"
                            fontSize={"4xl"}
                            maxW="500px"
                            color="brown"
                        >
                            Perfect data protection for your business
                        </Text>
                        <Text fontSize="15px" mt="18px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tempor quam quam adipiscing at est integer
                            tellus. Quis congue tortor tortor convallis egestas
                            magna massa consequat. Neque tellus nunc a augue
                            volutpat non elementum pulvinar.
                        </Text>

                        <Box mt="20px">
                            <Button
                                rounded="0"
                                py="25px"
                                bgColor={"brown"}
                                color="white"
                                shadow={"md"}
                                fontWeight={"400"}
                                _focus={{}}
                                _active={{}}
                                _hover={{}}
                            >
                                Request Package
                            </Button>
                        </Box>
                    </Box>
                </Flex>

                {/* Column 2 */}

                <Flex gap="30px" mt="50px" flexDir={["column-reverse", "row"]}>
                    <Box w={["100%", "50%"]}>
                        <Text
                            fontSize={""}
                            p="10px"
                            borderLeft={"2px"}
                            borderColor={"yellow"}
                            fontWeight={"700"}
                        >
                            INTRODUCE PACKAGE ONE
                        </Text>
                        <Text
                            fontWeight={700}
                            mt="20px"
                            fontSize={"4xl"}
                            maxW="500px"
                            color="brown"
                        >
                            Perfect data protection for your business
                        </Text>
                        <Text fontSize="15px" mt="18px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tempor quam quam adipiscing at est integer
                            tellus. Quis congue tortor tortor convallis egestas
                            magna massa consequat. Neque tellus nunc a augue
                            volutpat non elementum pulvinar.
                        </Text>

                        <Box mt="20px">
                            <Button
                                rounded="0"
                                py="25px"
                                bgColor={"brown"}
                                color="white"
                                shadow={"md"}
                                fontWeight={"400"}
                                _focus={{}}
                                _active={{}}
                                _hover={{}}
                            >
                                Request Package
                            </Button>
                        </Box>
                    </Box>
                    <Flex w={["100%", "50%"]} align="center" justify={"center"}>
                        <Image
                            src=""
                            w="100%"
                            h="400px"
                            alt=""
                            objectFit={"cover"}
                            fallbackSrc="https://via.placeholder.com/450"
                        />
                    </Flex>
                </Flex>

                {/* Coliumn 3 */}

                <Flex gap="30px" mt="50px" flexDir={["column", "row"]}>
                    <Flex w={["100%", "50%"]} align="center" justify={"center"}>
                        <Image
                            src=""
                            w="100%"
                            h="400px"
                            alt=""
                            objectFit={"cover"}
                            fallbackSrc="https://via.placeholder.com/450"
                        />
                    </Flex>
                    <Box w={["100%", "50%"]}>
                        <Text
                            fontSize={""}
                            p="10px"
                            borderLeft={"2px"}
                            borderColor={"yellow"}
                            fontWeight={"700"}
                        >
                            INTRODUCE PACKAGE ONE
                        </Text>
                        <Text
                            fontWeight={700}
                            mt="20px"
                            fontSize={"4xl"}
                            maxW="500px"
                            color="brown"
                        >
                            Perfect data protection for your business
                        </Text>
                        <Text fontSize="15px" mt="18px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tempor quam quam adipiscing at est integer
                            tellus. Quis congue tortor tortor convallis egestas
                            magna massa consequat. Neque tellus nunc a augue
                            volutpat non elementum pulvinar.
                        </Text>

                        <Box mt="20px">
                            <Button
                                rounded="0"
                                py="25px"
                                bgColor={"brown"}
                                color="white"
                                shadow={"md"}
                                fontWeight={"400"}
                                _focus={{}}
                                _active={{}}
                                _hover={{}}
                            >
                                Request Package
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            </ScreenWidth>
        </Box>
    );
};

export default Package;
