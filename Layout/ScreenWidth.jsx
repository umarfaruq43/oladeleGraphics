import { Box } from "@chakra-ui/react";
import React from "react";

const ScreenWidth = ({ children, ...props }) => {
    return <Box maxW="1250px" mx="auto" px={["12px", null, "16px"]} {...props}> {children} </Box>;
};

export default ScreenWidth;
