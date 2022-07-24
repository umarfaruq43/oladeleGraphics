import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const [navRoute, setNavRoute] = useState(true);

  useEffect(() => {
    router.route === "/" ? setNavRoute(true) : setNavRoute(false);
  }, []); // eslint-disable-line

  return (
    <Box zIndex="50" position="fixed" w="full" top="0">
      <Flex
        // bg={useColorModeValue("white", "gray.800")}
        bgColor="brand.brown"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Image src="/landingpage/logo.svg" alt="Oladele Graphics Logo" />
          </Text>
        </Flex>
        {/* // DesktopNav  */}
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav />
        </Flex>

        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
          justify="flex-end"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color="brand.white" />
              ) : (
                <HamburgerIcon color="brand.white" w={5} h={5} />
              )
            }
            variant={"dark"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Box zIndex="50">
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const [navRoute, setNavRoute] = useState(true);

  useEffect(() => {
    router.route === "/" ? setNavRoute(true) : setNavRoute(false);
  }, []); // eslint-disable-line

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navRoute ? navItem.href : `/${navItem.href}`}
            fontSize={"16px"}
            fontWeight={700}
            // color="brand.brown"
            borderRadius="15px"
            px="19px"
            color={active === index ? "brand.brown" : "brand.white"}
            bgColor={active === index ? "brand.yellow" : "transparent"}
            _hover={{
              textDecoration: "none",
              color: "brand.brown",
              bgColor: "brand.yellow",
            }}
            onClick={() => setActive(index)}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bgColor="brand.brown"
      mt="-2px"
      p={4}
      display={{ md: "none" }}
      position="absolute"
      w="full"
      zIndex="50"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const [navRoute, setNavRoute] = useState(true);

  useEffect(() => {
    router.route === "/" ? setNavRoute(true) : setNavRoute(false);
  }, []); // eslint-disable-line


  return (
    <Stack spacing={4} >
      <Flex
        py={2}
        as={Link}
        href={navRoute ? href : `/${href}`}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        // color="brand.white"
      >
        <Text fontWeight={600} color="brand.white">
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Works",
    href: "#work",
  },
  {
    label: "Services",
    href: "#service",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Testimonials",
    href: "#testimonial",
  },
  {
    label: "FAQs",
    href: "#faq",
  },
];
