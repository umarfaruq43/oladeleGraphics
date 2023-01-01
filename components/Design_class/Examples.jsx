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

const Feature = ({ title, text, icon, image, text_2 }) => {
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
                    {title}
                </Text>
                {/* <Text fontStyle="italic">{`${text}`}</Text> */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                />
                {text_2 ? <Text fontStyle="italic">{text_2}</Text> : ""}
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
                        title={"Sam Agboola"}
                        text={
                            "I celebrate you and your bold courage to do this."
                        }
                        text_2={"The concept greatly define the book"}
                        image="/design_class/image2.jpg"
                    />
                    <Feature
                        title={"Stanley Orji"}
                        text={"It's nice & well done job"}
                        image="/design_class/image1.jpg"
                    />
                    <Feature
                        title={"Dr. Psalm Ebube"}
                        text={
                            "WOW! <p> It's absolutely amazing. </p>  Thank you for being awesome brotherly."
                        }
                        image="/design_class/image4.jpg"
                    />

                    <Feature
                        title={"Sekinah O. Adeleke"}
                        text={
                            "This cover has been approved. <p>  Thank you for the great creativity. </p> "
                        }
                        image="/design_class/image3.jpg"
                    />
                </SimpleGrid>
            </Box>
        </ScreenWidth>
    );
}
