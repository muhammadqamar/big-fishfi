import React from "react";
import { Box, Button, Container, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import NavMenu from "../layout/mobileMenu";
const Navbar = () => {
  return (
    <Box w="100%" bg="rgba(47, 38, 91, 1)">
      <Container
        maxW="1440px"
        p={{ base: "25px 20px", md: "20px 30px", xl: "20px  140px" }}
        m="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image width={{ base: "208px", sm: "141px" }} src="/icon/nav_logo.svg" alt="logo" />
        <Flex display={{ base: "none", lg: "inherit" }} minW="625px" justifyContent="space-between">
          <Link href="/About">
            <a className="nav_link">About</a>
          </Link>
          <Link href="/Available Tokens">
            <a className="nav_link">Available Tokens</a>
          </Link>
          <Link href="/How to purchase">
            <a className="nav_link">How to purchase</a>
          </Link>
          <Link href="/How to start">
            <a className="nav_link">How to start</a>
          </Link>
        </Flex>
        <Button
          display={{ base: "none", lg: "inherit" }}
          w="153px"
          fontSize="20px"
          fontWeight="700"
          bg="#fff"
          color="#1A174C"
          borderRadius="35px"
          lineHeight="28px"
          p="11px 44px"
          h="auto"
        >
          Log in
        </Button>
        <Box display={{ base: "inherit", lg: "none" }}>
          <NavMenu />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
