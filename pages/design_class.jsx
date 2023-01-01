import { Box } from "@chakra-ui/react";
import React from "react";
import Book_Cover from "../components/Design_class/Book_Cover";
import Examples from "../components/Design_class/Examples";
import Expectations from "../components/Design_class/Expectations";
import Graphics from "../components/Design_class/Graphics";
import Hero from "../components/Design_class/Hero";
import Layout from "../Layout/Layout";
import Pixel from "../pixel";
import Footer from "../components/landingpage/Footer";
import Bonus from "../components/Design_class/Bonus";
import Requirement from "../components/Design_class/Requirement";
import Payment from "../components/Design_class/Payment";
import Faq from "../components/Design_class/Faq";
import PaymentProve from "../components/Design_class/PaymentProve";

const design_class = () => {
    return (
        <Box>
            <Pixel name="FacebookPixel" />
            <Hero />
            <Graphics />
            <Book_Cover />
            <Expectations />
            <Bonus />
            <Requirement />
            <PaymentProve />
            <Payment />
            <Faq />
            <Footer
                whatsapp={"https://api.whatsapp.com/send?phone=2348164609541"}
            />
        </Box>
    );
};

export default design_class;
