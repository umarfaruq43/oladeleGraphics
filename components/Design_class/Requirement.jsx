import {
    Box,
    Heading,
    List,
    ListIcon,
    ListItem,
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
                        <Text fontSize={"18px"}>
                            This is a time-tested and proven program filled with
                            strategies that work so you can build an empire off
                            of book cover design.
                        </Text>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Requirement;
