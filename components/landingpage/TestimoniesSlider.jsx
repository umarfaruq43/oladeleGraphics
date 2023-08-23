import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import CustomPagination from "./CustomPagination";
import { FaStar } from "react-icons/fa";
// import Image from "next/image";

const TestimoniesSlider = () => {
    const [activeSlide, setActiveSlide] = useState(2);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2, // Change this to 1
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2, // Change this to 1
                },
            },
        ],
        afterChange: (currentSlide) => setActiveSlide(currentSlide),
    };

    const goToSlide = (slideIndex) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(slideIndex);
            setActiveSlide(slideIndex);
        }
    };

    return (
        <Box mt="1.5rem">
            <Slider ref={sliderRef} {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                    return (
                        <Image key={i} src={`/pic_update/pic_${i + 1}.jpg`} h={["140px", "300px"]} px=".31rem" objectFit={"cover"} alt="images" />
                    );
                })}
            </Slider>
            <CustomPagination
                totalSlides={3}
                activeSlide={activeSlide}
                goToSlide={goToSlide}
            />
        </Box>
    );
};

export default TestimoniesSlider;
