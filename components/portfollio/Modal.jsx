import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";
import { GrClose } from "react-icons/gr";
import { workImage } from "../dynamicDatas";

const Modal = ({ data, show, handleShow }) => {
  const getAll = [];
  data && getAll.push(data.main);
  data && data.children && data.children.length !== 0
    ? getAll.push(data.children[0])
    : null;
  data && data.children && data.children.length > 1
    ? getAll.push(data.children[1])
    : null;
  data && data.children && data.children.length > 2
    ? getAll.push(data.children[2])
    : null;

  //   data.children.length > 1  ? console.log()

  // const mainData = workImage.filter((item) => data && item.main === data.main);

  // console.log(mainData);
  return (
    <Flex
    zIndex="50"
      position="fixed"
      bgColor="rgba(0,0,0, .05)"
      bottom="0"
      right="0"
      w="full"
      top="0"
      justify="center"
      align="center"
      display={show ? "flex" : "none"}
    >
      <Button
        zIndex="50"
        position="absolute"
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
        className="mySwiper"
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
      </Swiper>

      {/* <Text> {  mainData.main} </Text> */}
    </Flex>
  );
};

export default Modal;
