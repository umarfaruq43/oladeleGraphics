import {
    Box,
    Heading,
    Image,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import { MdCheckCircle } from "react-icons/md";

const Requirement = () => {
    return (
        <Box mt="62px">
            <ScreenWidth>
                <Box>
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
                            Class Requirements
                        </Text>
                    </Heading>

                    <Box fontSize="18px">
                        <Text fontSize={"18px"} mt="32px">
                            Everything you need to get started includes, but is
                            not limited to:
                        </Text>
                        <List spacing={3} fontSize={"16px"} my="24px">
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="brand.yellow"
                                />
                                A working PC that can run Photoshop or
                                CorelDraw.
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="brand.yellow"
                                />
                                A strong mindset to take on DIY projects.
                            </ListItem>
                        </List>
                        <Text
                            my="12"
                            mx="auto"
                            maxW={"1000"}
                            fontWeight={"900"}
                            fontSize={{ base: "3xl", md: "4xl" }}
                            textAlign={"center"}
                            color="brand.brown"
                        >
                            This is a time-tested and proven program filled with
                            strategies that work so you can build an empire off
                            of book cover design.
                        </Text>

                        <Text>
                            And to access the class, you are not paying N25,000
                            which would be a very good bargain especially when
                            you consider the fact that…
                        </Text>
                        <Text mt="14px">
                            Just one book cover design can earn you between
                            N20,000 to N40,000.
                        </Text>
                    </Box>

                  
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Requirement;
