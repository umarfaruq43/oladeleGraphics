// import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Box, Image, Text } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const WorkSample = () => {
    return (
        <Box maxW={"700px"} mx="auto" py="60px">
            <Swiper
                // slidesPerView={5}
                // spaceBetween={30}
                // centeredSlides={true}
                // loop={true}
                // loopAdditionalSlides={2}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                // navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                // className="mySwiper w-full"

                spaceBetween={15}
                loop={true}
                centeredSlides={true}
                speed={2000}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((product, i) => (
                    <SwiperSlide key={i}>
                        <Image
                            src={`/hero.jpg`}
                            alt="Product_logo"
                            width={"100%"}
                            height={"400px"}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box mt="40px" textAlign={"center"} fontSize={"15px"}>
                <Text as="span" fontSize={"20px"} fontWeight={"900"}>
                    “
                </Text>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                facere provident, iusto sapiente laudantium dolore officiis sit
                consequatur tempore corrupti pariatur ab iure architecto
                voluptas beatae reiciendis rerum ipsa qui numquam ea.
                <Text as="span" fontSize={"20px"} fontWeight={900}>
                    {" "}
                    ”
                </Text>
            </Box>

            <Image
                src="/demo.jpg"
                alt=""
                w="72px"
                h={["auto", null, "72px"]}
                rounded="full"
                mx="auto"
                mt="30px"
            />
            <Text fontSize={"14px"} textAlign={"center"} mt="10px">
                Faruq Abdul Azeez
            </Text>
        </Box>
    );
};

export default WorkSample;
