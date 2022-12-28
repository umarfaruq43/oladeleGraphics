import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import Examples from "./Examples";

const Book_Cover = () => {
    return (
        <Box bgColor={"brand"}>
            <ScreenWidth>
                <Box py="60px">
                    <Text
                        // maxW={"700px"}
                        mx="auto"
                        fontWeight={"900"}
                        fontSize="30px"
                        textAlign={"center"}
                        color="brand.brown"
                    >
                        But what exactly is{" "}
                        <Text as="span" color="brand.yellow">
                            Book Cover Design
                        </Text>{" "}
                        and how can you learn it?
                    </Text>
                    <Text
                        maxW="700px"
                        fontWeight={"600"}
                        fontSize={"18px"}
                        textAlign={"center"}
                        mx="auto"
                        pb="50px"
                    >
                        Book Cover Design is the logical interpretation of a
                        {` book's`} content using the design elements for the
                        visual appearance of a book.
                    </Text>
                    <Box>
                        <Examples />
                    </Box>
                    <Box
                        mt="60px"
                        fontWeight={"600"}
                        // maxW="2xl"
                        mx="auto"
                        textAlign="center"
                        fontSize={"20px"}
                        // color={"gray.500"}
                    >
                        <Text>It’s that simple.</Text>
                        <Text mt="16px">
                            All you’re doing as a book cover designer is putting
                            colour, shape, line, texture, etc together to form a
                            visual appearance that best describes a {`book's`}
                            content and make the book stand out on a shelf.
                        </Text>
                        <Text mt="16px">
                            It doesn’t end there. It’s very easy to learn that a
                            computer illiterate will do it without any hardship.
                        </Text>
                        <Text>And that means,</Text>
                        <Text
                            mt="16px"
                            fontSize={["18px", null, "24px"]}
                            color="brand.black"
                            
                        >
                            You don’t need any basic knowledge of computers. You
                            also don’t have to know the basics of design or
                            technical drawing.
                        </Text>
                    </Box>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Book_Cover;
