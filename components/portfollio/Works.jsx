import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { workImage } from "../dynamicDatas";
import Modal from "./Modal";
import Image from "next/image";

const Works = () => {
  const [show, setShow] = useState(false);
  const myLoader = () => {
    return `https://via.placeholder.com/281X735?text=Loading...`;
  };
  return (
    <Box position="relative" overflow="hidden">
      <Box maxW="1200px" mx="auto" px={["31px", "11px"]} my="41px">
        <Flex flexWrap="wrap" gap="30px" justifyContent="center">
          {workImage.map((item, i) => {
            const handleShow = (e) => {
              setShow(!show);
            };

            return (
              <Box key={i}>
                {/* <Modal show={show} handleShow={handleShow} data={item} /> */}
                <Box
                  overflow="hidden"
                  // w="281px"
                  h="355px"
                  bgColor="red"
                  borderRadius="20px"
                  className="work slides"
                  minW="281px"
                  w="30%"
                  cursor="pointer"
                  // mx="auto"
                  onClick={handleShow}
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
                    <Text color="#fff"> See more</Text>
                  </Flex>
                  <Image
                    // src="/landingpage/book2.svg"
                    loader={myLoader}
                    src={item.main}
                    alt="Work Sample"
                    width="100%"
                    height="100%"
                    layout="fill"
                    quality="40"
                    // size=""
                    objectFit="cover"
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
