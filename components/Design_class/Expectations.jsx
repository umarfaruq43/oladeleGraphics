import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";
export default function Expectations() {
    return (
        <Stack minH={"40vh"} direction={{ base: "column", md: "row" }}>
            <Flex
                p={8}
                flex={1}
                align={"center"}
                justify={"center"}
                color="brand.black"
            >
                <Stack spacing={6} w={"full"} maxW={"xl"}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
                            How you can learn it
                        </Text>
                    </Heading>
                    <Box fontSize={{ base: "md", md: "18px" }}>
                        <Text fontSize={{ base: "md", md: "18px" }}>
                            The structure of this book cover class is designed
                            to take you through graphic design from scratch
                            before progressing to designing book covers
                            excellently and exceptionally from the comfort of
                            your home.
                        </Text>
                        <Text mt="4">
                            This is what you will learn from this class:
                        </Text>

                        {things.map((item, i) => {
                            return (
                                <Box mt="18px" key={i}>
                                    <Text fontWeight={"bold"} color="black">
                                        {item.title}
                                    </Text>
                                    {item.children.map((itx, i) => {
                                        return (
                                            <List
                                                spacing={3}
                                                mt="8px"
                                                key={i}
                                                ml="10px"
                                            >
                                                <ListItem>
                                                    <ListIcon
                                                        as={MdCheckCircle}
                                                        color="brand.yellow"
                                                    />
                                                    {itx}
                                                </ListItem>
                                            </List>
                                        );
                                    })}
                                </Box>
                            );
                        })}
                    </Box>
                </Stack>
            </Flex>
            <Flex flex={1} display={["none", null, "flex"]}>
                <Image
                    alt={"Login Image"}
                    objectFit={"cover"}
                    src={"/design_class/image1.jpg"}
                />
            </Flex>
        </Stack>
    );
}

const things = [
    {
        title: "What makes an Expert Designers",
        children: [
            "What Graphics design is",
            "Skills to be a Graphics designer",
            "Design Theory",
        ],
    },

    {
        title: "Is a book cover design complex?",
        children: [
            "How to interpret a client's requirement.",
            "Generating an excellent design concept for a book cover.",
        ],
    },
    {
        title: "Photoshop vs CorelDraw",
        children: [
            "Set up Photoshop interface for book cover design",
            "Working with Mockup.",
            "Do it Yourself (DIY) virtual test and assignment",
            "Set up CorelDraw interface for book cover design.",
            "Photoshop or CorelDraw? Why?",
        ],
    },

    {
        title: "How to get a high-paying client?",
        children: [
            "Where is my first client?",
            "How to get a high-paying gig.",
        ],
    },
];
