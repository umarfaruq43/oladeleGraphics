import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
} from "@chakra-ui/react";
import ScreenWidth from "../../Layout/ScreenWidth";

export default function Graphics() {
    return (
        <ScreenWidth maxW={"7xl"}>
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                gap="32px"
                direction={{ base: "column-reverse", md: "row" }}
            >
                <Box flex={1} spacing={{ base: 5, md: 10 }} mt="">
                    <Text
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: "30%",
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: "brand.yellow",
                                zIndex: -1,
                            }}
                            color="brand.brown"
                        >
                            Graphics Design
                        </Text>
                    </Text>
                    <Box color="gray.900" fontSize={["16px", , "18px"]}>
                        <Text color={""} mt="30px" align={"justify"}>
                            Graphics Design is one of the high-income skills
                            that are in top demand by clients, and this skill
                            can earn you an income of $500 or more each week, or
                            $2000 or more a month.
                        </Text>
                        <Text mt="10px">
                            And putting the figures in context as Nigerian Naira
                            using N750/$…
                        </Text>
                        <Text mt="10px" align={"justify"}>
                            This is a high-income skill that will earn you an
                            income of #375,000 or more each week, or #1.5M or
                            more a month.
                        </Text>
                    </Box>
                    {/* <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Button
                            rounded={"full"}
                            size={"lg"}
                            fontWeight={"normal"}
                            px={6}
                            colorScheme={"red"}
                            bg={"red.400"}
                            _hover={{ bg: "red.500" }}
                        >
                            Get started
                        </Button>
                    </Stack> */}
                </Box>
                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                    mt="30px"
                >
                    <Blob
                        w={"150%"}
                        h={"150%"}
                        position={"absolute"}
                        top={"-20%"}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue("red.50", "red.400")}
                    />
                    <Box
                        position={"relative"}
                        height={"300px"}
                        rounded={"2xl"}
                        boxShadow={"2xl"}
                        width={"full"}
                        overflow={"hidden"}
                    >
                        <Image
                            alt={"Hero Image"}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={
                                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </ScreenWidth>
    );
}

export const Blob = (props) => {
    return (
        <Icon
            width={"100%"}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="#efc862"
            />
        </Icon>
    );
};
