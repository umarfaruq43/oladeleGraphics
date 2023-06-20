import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
} from "@chakra-ui/react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { AiFillCheckCircle } from "react-icons/ai";

export default function CallToActionWithVideo() {
    return (
        <Box
            bgImage="/demo.jpg"
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            position="relative"
        >
            <Box
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.8)" // Adjust the fade color and opacity here
            >
                <ScreenWidth>
                    <Stack
                        align={"center"}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}
                        direction={{ base: "column", md: "row" }}
                        color={"white"}
                    >
                        <Stack flex={1} spacing={{ base: 5, md: 5 }}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                            >
                                <Text as={"span"} position={"relative"}>
                                    Design once,
                                </Text>
                                <br />
                                <Text as={"span"} color={"yellow"}>
                                    Use Anywhere!
                                </Text>
                            </Heading>
                            <Text color={""}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo you can
                                use them anywhere. All that is free!
                            </Text>

                            <Stack spacing={"3"}>
                                <Flex align="center" gap="10px">
                                    <Icon
                                        as={AiFillCheckCircle}
                                        color="yellow"
                                        boxSize={"24px"}
                                    />{" "}
                                    <Text> Payment on deleivery </Text>
                                </Flex>

                                <Flex align="center" gap="10px">
                                    <Icon
                                        as={AiFillCheckCircle}
                                        color="yellow"
                                        boxSize={"24px"}
                                    />{" "}
                                    <Text> Payment on deleivery </Text>
                                </Flex>

                                <Flex align="center" gap="10px">
                                    <Icon
                                        as={AiFillCheckCircle}
                                        color="yellow"
                                        boxSize={"24px"}
                                    />{" "}
                                    <Text> Payment on deleivery </Text>
                                </Flex>
                            </Stack>
                            <Stack
                                spacing={{ base: 4, sm: 6 }}
                                direction={{ base: "column", sm: "row" }}
                            >
                                <Button
                                    rounded={"full"}
                                    size={"lg"}
                                    fontWeight={"bold"}
                                    px={6}
                                    color={"brown"}
                                    bg={"yellow"}
                                    _hover={{ bg: "brown0" }}
                                >
                                    Get in Touch
                                </Button>
                            </Stack>
                        </Stack>
                        <Flex
                            flex={1}
                            justify={"center"}
                            align={"center"}
                            position={"relative"}
                            w={"full"}
                        >
                            <Box
                                position={"relative"}
                                // height={"300px"}
                                rounded={"2xl"}
                                boxShadow={"2xl"}
                                width={"full"}
                                overflow={"hidden"}
                            >
                                <Image
                                    alt={"Hero Image"}
                                    fit={"cover"}
                                    align={"center"}
                                    w={"100%"}
                                    h={"100%"}
                                    src={"/hero.jpg"}
                                />
                            </Box>
                        </Flex>
                    </Stack>
                </ScreenWidth>
            </Box>
        </Box>
    );
}
