import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon,
    Text,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Que = () => {
    return (
        <Accordion>
            {faq.map((item, i) => {
                return (
                    <AccordionItem
                        mb="20px"
                        key={i}
                        borderTopColor="brand.brown"
                        borderBottomColor="brand.brown"
                        px={["10px", null, "20px"]}
                    >
                        {({ isExpanded }) => (
                            <>
                                <Text py={["10px", null, "20px"]}>
                                    <AccordionButton
                                        _focus={{ bgColor: "transparent" }}
                                        color=""
                                    >
                                        <Box
                                            flex="1"
                                            textAlign="left"
                                            fontSize={["20px", null, "24px"]}
                                            fontWeight="900"
                                        >
                                            {item.que}
                                        </Box>
                                        {isExpanded ? (
                                            <Icon
                                                as={AiOutlineMinus}
                                                fontSize="20px"
                                            />
                                        ) : (
                                            <Icon
                                                as={AiOutlinePlus}
                                                fontSize="20px"
                                            />
                                        )}
                                    </AccordionButton>
                                </Text>
                                <AccordionPanel
                                    pb={4}
                                    color="brand.brown"
                                    fontSize="18px"
                                >
                                    {item.ans}
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default Que;

const faq = [
    {
        que: "How many months am I signing up for?",
        ans: "The program is a 15-days course. Even more exciting is that it will be recorded, and you will be able to go back to it at your leisure for better understanding.",
    },
    {
        que: "After signing up, how will I access the class?",
        ans: "After signing up, you'll be added to a virtual class via telegram (I don't know the learning medium) where you'll be able to access the live teaching, coaching sessions, and materials.",
    },

    {
        que: " What if I am a beginner?",
        ans: "Even better. The program is designed to introduce you to the basics of graphic design before progressing into book cover designs.",
    },

    {
        que: " I am not a Nigerian; can I participate from my country?",
        ans: "Yes! The coaching is 100% online, so you can participate from anywhere in the world with an internet connection.",
    },

    {
        que: "I am currently learning Amazon Publishing; how does enrolling in this program benefit me?",
        ans: "You need all the necessary information needed to thrive on amazon at hand and this program will help you stand out in the mist of so many publishers as you will be able to design sterling book covers that sells your book at a glance.",
    },

    {
        que: " How soon do I have to decide before enrolling in this program?",
        ans: "We have a limited enrollment slot, and this is determined by the number of people who sign up before 48 hours elapse. So, if you want to be part of the program, it's better to sign up right NOW!",
    },
];
