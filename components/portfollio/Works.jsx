import { Box, Flex, Text, Spinner, SimpleGrid,  } from "@chakra-ui/react";
import React, { useState } from "react";
import { workImage } from "../dynamicDatas";
import Modal from "./Modal";
import Image from "next/image";



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
  const [current, setCurrent] = useState(null);

  const recentWork = [];
  for (let i = 1; i < 42; i++) {
    recentWork.push({ main: i, children: [i], new:true });
  }

  let totalWork = recentWork.concat(workImage)  
  

  return (
    <Box position="relative" overflow="hidden">
      <Box maxW="1200px" mx="auto" px={["14px", "11px"]} my="41px">
        <SimpleGrid columns={["3"]} spacing={["0.51rem", null, "1.25rem"]} >
          {totalWork.map((item, i) => {
            const handleShow = (e, item) => {
              setShow(!show);
              setCurrent(item);
            };
            
            return (
              <Box key={i}>
                {current && <Modal show={show} handleShow={handleShow} data={current} />}
                <Box
                  overflow="hidden"
                  // w="281px"
                  position="relative"
                  // h="355px"
                  bgColor="rgba(6,6,6, .5)"
                  // borderRadius="20px"
                  className="work slides"
                  // minW="281px"
                  // maxW="281px"
                  // w="30%"
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


                  <Image
                    src={`${item.new ? `/pic_update/pic_${i + 2}.jpg` : item.main }`}
                    // src={Img}
                    alt="Work Sample"
                    layout="responsive"
                    width={1}
                    height={1}
                    className="img"
                  // objectFit="cover"
                  // fallbackSrc="https://flevix.com/wp-content/uploads/2019/07/Untitled-2.gif"
                  />


                </Box>
              </Box>
            );
          })}
        </SimpleGrid>


        {/* Secnod Images   */}

      
      </Box>
    </Box>
  );
};

export default Works;


// <SimpleGrid columns={["3"]} spacing={["0.51rem", null, "1.25rem"]} >
//   {workImage.map((item, i) => {
//     const handleShow = (e, item) => {
//       setShow(!show);
//       setCurrent(i);
//     };

//     return (
//       <Box key={i}>
//         {item.children && <Modal show={show} handleShow={() => handleShow} data={current} />}
//         <Box
//           overflow="hidden"
//           // w="281px"
//           position="relative"
//           // h="355px"
//           bgColor="rgba(6,6,6, .5)"
//           // borderRadius="20px"
//           className="work slides"
//           // minW="281px"
//           // maxW="281px"
//           // w="30%"
//           cursor="pointer"
//           // mx="auto"
//           onClick={(e) => handleShow(e, item)}
//         >
//           {/* modal start  */}

//           <Flex
//             opacity="0"
//             position="absolute"
//             w="full"
//             bgColor="rgba(0,0,0, .5)"
//             bottom="0"
//             top="0"
//             zIndex="10"
//             justify="center"
//             align="center"
//           >
            
//             <Text color="#fff"> View larger Image </Text>
//           </Flex>


//           <Image

//             src={item.main}
//             alt="Work Sample"
//             layout="responsive"
//             width={1}
//             height={1}
//             className="img"

//           />


//         </Box>
//       </Box>
//     );
//   })}
// </SimpleGrid>