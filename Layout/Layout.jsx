import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Navbar />
      <Box font="inter" mt="66px">{children}</Box>
    </Box>
  );
};

export default Layout;
