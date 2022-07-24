import { background, Box, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";
import { workImage } from "../../components/dynamicDatas";
// import Image from "next/image";

const Slider = () => {
  const portfolio = workImage.map((item, i) => item.main);
  let final = portfolio.splice(0, 8);
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDone(true);
  }, []);

  return (
    <Box mt={["15px", "45px"]} mb="85px" className="service">
      {done && (
        <Swiper
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          slidesPerView={1}
          grabCursor={true}
          modules={[FreeMode, Pagination]}
          // className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            440: {
              width: 440,
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
        >
          {final.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                tag="li"
                style={{ listStyle: "none", marginRight: "10px" }}
              >
                <Box
                  overflow="hidden"
                  borderRadius="20px"
                  className="slides"
                  minW="281px"
                  h="335px"
                >
                  <Image
                    src={item && item}
                    alt="Work Sample"
                    // width="100%"
                    height="100%"
                    // layout="fill"
                    // quality="40"
                    objectFit="cover"
                    style={{ borderRadius: "20px" }}
                    // w="100%"
                    // h="335px"
                    // objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/281X335?Loading..."
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </Box>
  );
};

export default Slider;
