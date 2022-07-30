import { Box } from "@chakra-ui/react";
import React from "react";
import Works from "../components/portfollio/Works";
import Layout from "../Layout/Layout";
import Pixel from "../pixel";
const portfolio = () => {
  return (
    <Layout>
      <Pixel name="FacebookPixel" />

      <Works />
    </Layout>
  );
};

export default portfolio;
