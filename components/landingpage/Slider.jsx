import { background, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";
import { workImage } from "../../components/dynamicDatas";

const Slider = () => {
  const portfolio = workImage.map((item, i) => item.main);
  let final = portfolio.splice(0, 10);

  return (
    <Box mt={["15px", "45px"]} mb="85px" className="service">
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // slidesPerView={4}
        grabCursor={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{minWidth: "281px"}}
      >
        {/* {workImage} */}
        {/* {workImage.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                src={item && item.main}
                alt="Work Sample"
                w="281px"
                h="355px"
                objectFit="cover"
              />
            </SwiperSlide>
          );
        })} */}

        {final.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Box
                overflow="hidden"
                // border="1px"
                borderRadius="20px"
                className="slides"
                minW="281px"
              >
                <Image
                  src={item && item}
                  alt="Work Sample"
                  w="281px"
                  h="355px"
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/281X335"
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slider;
