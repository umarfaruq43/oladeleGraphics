import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const CustomPagination = ({
    totalSlides,
    activeSlide,
    goToSlide,
}) => {
    const paginationItems = [];

    for (let i = 0; i < totalSlides; i++) {
        paginationItems.push(
            <Box
                key={i}
                onClick={() => goToSlide(i)}
                width={activeSlide === i ? "25px" : "15px"}
                height="15px"
                borderRadius={activeSlide === i ? "100px" : "50%"}
                background={activeSlide === i ? "brand.yellow" : "brand.brownFade"}
                cursor="pointer"
                transition={"ease-in-out"}
                transitionDuration={".6s"}
            ></Box>
        );
    }

    return (
        <Flex justify="center" gap="16px" mt="1rem">
            {paginationItems}
        </Flex>
    );
};

export default CustomPagination;
