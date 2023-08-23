import { Box } from "@chakra-ui/react";
import React from "react";
import Pixel from "../pixel";
import Hero from "../components/Aboard/Hero";
import WorkSample from "../components/Aboard/WorkSample";
import Testimony from "../components/Aboard/Testimony";
import Package from "../components/Aboard/Package";
import ContactForm from "../components/Aboard/ContactForm";

const design_class = () => {
    return (
        <Box>
            <Pixel name="FacebookPixel" />
            <Hero />
            <WorkSample />
            <Package />
            <Testimony />
            <ContactForm />
        </Box>
    );
};

export default design_class;
