import { ReactElement } from "react";
import {
    Box,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
    Center,
    Image,
    useColorModeValue,
    Heading,
    // Card,
    // CardHeader,
    // CardBody,
    Avatar,
} from "@chakra-ui/react";

import ScreenWidth from "../../Layout/ScreenWidth";

const Feature = ({ title, text, icon, image }) => {
    return (
        <Box shadow="lg" rounded={"lg"} overflow="hidden" bg={"brand.white"}>
            <Box h="">
                <Image
                    objectFit="cover"
                    src={image}
                    alt="Chakra UI"
                    maxH={"357px"}
                    w="100%"
                    h="100%"
                />
            </Box>

            <Box py="20px" px="20px">
                <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                    The {`author's`} review
                </Text>
                <Text fontStyle="italic">{text}</Text>
            </Box>
        </Box>
    );
};

export default function Examples() {
    return (
        <ScreenWidth>
            <Box p={0}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="32px">
                    <Feature
                        title={"Lifetime Support"}
                        text={
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                        }
                        image="/design_class/image1.jpg"
                    />
                    <Feature
                        title={"Unlimited Donations"}
                        text={
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                        }
                        image="/design_class/image2.jpg"
                    />
                    <Feature
                        title={"Instant Delivery"}
                        text={
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                        }
                        image="/design_class/image3.jpg"
                    />

                    <Feature
                        title={"Instant Delivery"}
                        text={
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                        }
                        image="/design_class/image4.jpg"
                    />
                </SimpleGrid>
            </Box>
        </ScreenWidth>
    );
}
