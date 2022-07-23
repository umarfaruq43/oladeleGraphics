import { Box, Flex, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";
import { GrClose } from "react-icons/gr";

const Modal = ({ data, show, handleShow }) => {
  const getAll = [];
  getAll.push(data.main);
  data.children.length !== 0 ? getAll.push(data.children[0]) : null;
  data.children.length > 1 ? getAll.push(data.children[1]) : null;
  data.children.length > 2 ? getAll.push(data.children[2]) : null;

//   data.children.length > 1  ? console.log()
  return (
    <Flex
      position="fixed"
      bgColor="rgba(0,0,0, .05)"
      bottom="0"
      right="0"
      w="full"
      top="0"
      zIndex="10"
      justify="center"
      align="center"
      display={show ? "flex" : "none"}
    >
      <Button
        position="absolute"
        zIndex="10"
        right="10"
        top="10"
        onClick={handleShow}
      >
        <GrClose />
      </Button>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "100%",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        // className="mySwiper"
      >
        {data &&
          getAll.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="swiper-zoom-container">
                  <Image src={item} alt="Images" />
                </div>
              </SwiperSlide>
            );
          })}
        {/* <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image src="/landingpage/test2.jpg" alt="Images" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </Flex>
  );
};

export default Modal;
