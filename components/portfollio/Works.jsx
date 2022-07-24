import { Box, Flex, Text, Image, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { workImage } from "../dynamicDatas";
import Modal from "./Modal";
// import Image from "next/image";

const fall = () => {
  return (
    <Flex
      opacity="0"
      position="absolute"
      w="full"
      bgColor="rgba(0,0,0, .5)"
      bottom="0"
      top="0"
      zIndex="10"
      justify="center"
      align="center"
    >
      <Spinner />
    </Flex>
  );
};

const Works = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState([]);

  return (
    <Box position="relative" overflow="hidden">
      <Box maxW="1200px" mx="auto" px={["31px", "11px"]} my="41px">
        <Flex flexWrap="wrap" gap="30px" justifyContent="center">
          {workImage.map((item, i) => {
            const handleShow = (e, item) => {
              setShow(!show);
              setCurrent(item);
            };
            // console.log(item);
            return (
              <Box key={i}>
                <Modal show={show} handleShow={handleShow} data={current} />
                <Box
                  overflow="hidden"
                  // w="281px"
                  position="relative"
                  h="355px"
                  bgColor="rgba(6,6,6, .5)"
                  borderRadius="20px"
                  className="work slides"
                  minW="281px"
                  maxW="281px"
                  w="30%"
                  cursor="pointer"
                  // mx="auto"
                  onClick={(e) => handleShow(e, item)}
                >
                  {/* modal start  */}

                  <Flex
                    opacity="0"
                    position="absolute"
                    w="full"
                    bgColor="rgba(0,0,0, .5)"
                    bottom="0"
                    top="0"
                    zIndex="10"
                    justify="center"
                    align="center"
                  >
                    {/* <Spinner /> */}
                    <Text color="#fff"> View larger Image </Text>
                  </Flex>
                  {/* <Image
                    src={item.main}
                    alt="Work Sample"
                    // width="100%"
                    // height="100%"
                    layout="fill"
                    quality="10"
                    // size=""
                    objectFit="cover"
                  /> */}

                  <Image
                    src={item.main}
                    alt="Work Sample"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    fallbackSrc="https://flevix.com/wp-content/uploads/2019/07/Untitled-2.gif"
                  />
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Works;
