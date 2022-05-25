import React from "react";
import { Box, Button, Container, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      w="100%"
      minH={{ base: "586px", lg: "500.63px" }}
      bgImage={"/icon/footer_bgImg.svg"}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Box
        p={{
          base: "25px 20px",
          md: "20px 30px",
          xl: "20px  140px",
        }}
      >
        <Container
          maxW="1440px"
          p="0"
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "flex-start", lg: "center" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Image
            width={{ base: "208px", sm: "141px" }}
            src="/icon/nav_logo.svg"
            alt="logo"
            marginBottom={{ base: "50px", lg: "0" }}
          />
          <Flex
            minW={{ base: "100%", lg: "625px" }}
            justifyContent="space-between"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Link href="/About">
              <a className={`${"nav_link"} ${"link_main"}`}>About</a>
            </Link>
            <Link href="/Available Tokens">
              <a className={`${"nav_link"} ${"link_main"}`}>Available Tokens</a>
            </Link>
            <Link href="/How to purchase">
              <a className={`${"nav_link"} ${"link_main"}`}>How to purchase</a>
            </Link>
            <Link href="/How to start">
              <a className={`${"nav_link"} ${"link_main"}`}>How to start</a>
            </Link>
          </Flex>
          <Button
            W="153px"
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
            m={{ base: "51px 0 46px 0", lg: "48px auto 43px" }}
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
            m={{ base: "0", lg: "auto" }}
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
