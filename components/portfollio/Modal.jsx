import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";
import { GrClose } from "react-icons/gr";
import { workImage } from "../dynamicDatas";
// import Image from "next/image";

const Modal = ({ data, show, handleShow }) => {
  // const getAll = [];
  // data && getAll.push(data.main);
  // data && data.children && data.children.length !== 0
  //   ? getAll.push(data.children[0])
  //   : null;
  // data && data.children && data.children.length > 1
  //   ? getAll.push(data.children[1])
  //   : null;
  // data && data.children && data.children.length > 2
  //   ? getAll.push(data.children[2])
  //   : null;

  // console.log(getAll);
  console.log(data);


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
          data.children.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="swiper-zoom-container" style={{ minHeight: "100vh", minWidth: "100%", position: "relative" }}>
                  <Image src={`${data && data.new ? `/pic_update/pic_${item + 1}.jpg` : item}`} alt="Images" layout="fill" />

                  {/* <Image src={`/pic_update/pic_${item}.jpg`} alt="Images" layout="fill" width={1000} /> */}


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
