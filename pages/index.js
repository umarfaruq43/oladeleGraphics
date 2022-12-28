import { Box } from "@chakra-ui/react";
import Head from "next/head";
import About from "../components/landingpage/About";
import Client from "../components/landingpage/Client";
import Faq from "../components/landingpage/Faq";
import Features from "../components/landingpage/Features";
import Footer from "../components/landingpage/Footer";
import Hero from "../components/landingpage/Hero";
import Portfolio from "../components/landingpage/Portfolio";
import Service from "../components/landingpage/Service";
import Slider from "../components/landingpage/Slider";
import Video from "../components/landingpage/Video";
import Layout from "../Layout/Layout";
import Pixel from "../pixel";
// import styles from "../styles/Home.module.css";
// import "swiper/css";
// import "swiper/css/zoom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
export default function Home() {
    return (
        <>
            <Pixel name="FacebookPixel" />
            <Layout overflow="hidden">
                <Hero />
                <Features />
                <Video />
                <Portfolio />
                <Box bgColor="brand.brownFade">
                    <Service />
                </Box>
                <About />
                <Client />
                <Faq />
                <Footer whatsapp={"https://wa.me/message/JX5ANIYU4LFCK1"} />
            </Layout>
        </>
    );
}
