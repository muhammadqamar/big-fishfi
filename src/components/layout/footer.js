import React from "react";
import { Box, Button, Container, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      w="100%"
      minH={{ base: "586px", lg: "500.63px" }}
      bgImage={"/footer-bg.svg"}
      bgRepeat="no-repeat"
      bgPosition={{ base: "bottom", xl: "center 22px" }}
      bgSize="contain"
      pos={{ base: "inherit", xl: "relative" }}
    >
      <Box
        w="100%"
        h="277px"
        top="158px"
        bgImage="url(fot-bg-3.svg)"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        pos="absolute"
        display={{ base: "none", xl: "block" }}
      />
      <Box
        w="100%"
        h="180px"
        bottom="0"
        bgImage="url(fot-bg-2.svg)"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        pos="absolute"
        display={{ base: "none", xl: "block" }}
      />
      <Box
        w="100%"
        pos={{ base: "inherit", xl: "absolute" }}
        p={{
          base: "25px 20px",
          md: "0  30px  32px",
          xl: "289px  140px  0",
        }}
      >
        <Container
          maxW="1440px"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent="space-between"
          flexWrap="wrap"
          p="0"
        >
          <Link href="#home">
            <Image
              width={{ base: "208px", sm: "141px" }}
              src="/icon/nav_logo.svg"
              alt="logo"
              cursor="pointer"
              marginBottom={{ base: "50px", lg: "0" }}
            />
          </Link>
          <Flex
            minW={{ base: "100%", lg: "625px" }}
            justifyContent="space-between"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Link href="#About">
              <a className={`${"nav_link"} ${"link_main"}`}>About</a>
            </Link>
            <Link href="#Available-Tokens">
              <a className={`${"nav_link"} ${"link_main"}`}>Available Tokens</a>
            </Link>
            <Link href="#How-to-purchase">
              <a className={`${"nav_link"} ${"link_main"}`}>How to purchase</a>
            </Link>
            <Link href="#How-to-start">
              <a className={`${"nav_link"} ${"link_main"}`}>How to start</a>
            </Link>
          </Flex>
          <Button
            w="153px"
            fontSize="20px"
            fontWeight="700"
            bg="#fff"
            color="#1A174C"
            borderRadius="35px"
            lineHeight="28px"
            p="11px 44px"
            mt={{ base: "10px", lg: "inherit" }}
            h="auto"
          >
            Log in
          </Button>
        </Container>
        <Box w="100%">
          <Flex
            maxW="330px"
            justifyContent="space-between"
            m={{ base: "51px 0 46px 0", md: "30px auto 40px" }}
          >
            <Image w="34px" h="34px" src="/icon/twitter.svg" alt="twitter" />
            <Image w="34px" h="34px" src="/icon/telegram.svg" alt="telegram" />
            <Image w="34px" h="34px" src="/icon/instagram.svg" alt="instgrm" />
            <Image w="34px" h="34px" src="/icon/facebook.svg" alt="facebook" />
          </Flex>
          <Text
            maxW="330px"
            color="rgba(255, 255, 255, 0.5)"
            fontWeight="400"
            fontSize="14px"
            lineHeight="22px"
            letterSpacing="0.02em"
            m={{ base: "0 auto 45px", lg: "0 auto 32px" }}
            textAlign="center"
          >
            Copyright © 2022 All rights reserved | Privacy
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
