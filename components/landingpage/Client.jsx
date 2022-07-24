import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import ClientCard from "./ClientCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { userTestimony } from "../dynamicDatas";

const Client = () => {
  return (
    <Box
      bgColor="brand.brown"
      py={["31px", "128px"]}
      color="brand.white"
      mt={["57px", "71px"]}
      px={["31px", "11px"]}
      id="testimonial"
    >
      <Box maxW="1200px" mx="auto">
        <Box></Box>
        <Flex gap="24px" justify="space-between" flexDir={["column", " row"]}>
          <Flex justify="center">
            <Text maxW="420px" fontWeight="800" fontSize={["24px", "48px"]}>
              HAPPY CLIENTS{" "}
              <Text as="span" color="brand.yellow">
                REVIEW
              </Text>
            </Text>
          </Flex>

          {/* Client card start here  */}

          <Box w={["100%", "50%"]} color="black" borderRadius="5px">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Pagination]}
              className="mySwiper"
              pagination={{
                clickable: true,
              }}
            >
              { userTestimony && userTestimony .map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <ClientCard data={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Client;
