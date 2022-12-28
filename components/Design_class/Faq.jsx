import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";

import Que from "./Que";

const Faq = () => {
    return (
        <Box py='64px'>
            <ScreenWidth>
                <Box id="faq" pb="32px">
                    <Text
                        fontWeight="600"
                        fontSize={["24px", "36px", "48px"]}
                        textAlign="center"
                        mx="auto"
                        maxWidth="700px"
                    >
                        FREQUENTLY ASKED{" "}
                        <Text as="span" color="brand.yellow">
                            QUESTIONS
                        </Text>{" "}
                    </Text>
                </Box>

                <Box maxWidth="1000px" mx="auto">
                    <Que />

                    <Text pb="30px"></Text>
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Faq;
