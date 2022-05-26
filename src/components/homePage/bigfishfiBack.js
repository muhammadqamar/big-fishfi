import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
const BigfishfiBack = () => {
  return (
    <Box
      maxW="1440px"
      p={{ base: "25px 20px", md: "20px 30px", xl: "0 239px 26.82px 140px" }}
      m="auto"
    >
      <Flex
        justifyContent="space-between"
        minH="626px"
        flexDirection={{ base: "column", lg: "inherit" }}
      >
        <Box maxW={{ base: "100%", lg: "506px" }}>
          <Text
            maxW={{ base: "373px", lg: "655px" }}
            className="sub-heading-one"
            color="#fff"
            mb="30px"
          >
            Is BigFishFi Giving Back?
          </Text>
          <Text className="para-text" mb="20px" color="#d4d2e8">
            BigFishFi Token loves its Rainbow Snapper mascot (and all its sea pals). Our crew is
            actively seeking ways to help our beloved marine life and our beautiful oceans;
          </Text>
          <Text className="para-text" mb="20px" color="#d4d2e8">
            This inspired AzureWay.
          </Text>
          <Text className="para-text " mb="0" color="#d4d2e8">
            Joining #AzureWay is easy and just takes a few clicks. Join our movement today and start
            impacting change. Overfishing is one of the world&apos;s most pressing environmental
            issues.
          </Text>
        </Box>
        <Box maxW={{ base: "100%", lg: "467px" }} pt={{ base: "30px", lg: "200px" }}>
          <Text className="para-text" mb="20px" color="#d4d2e8">
            We can help marine life maintain the Earth&apos;s temperature by minimising overfishing.
            Oceans are the planet&apos;s largest carbon sink.
          </Text>
          <Text className="para-text" mb="20px" color="#d4d2e8">
            AzureWay&apos;s purpose is to improve ocean governance through top-down and bottom-up
            approaches and to help local communities on the front lines of marine and environmental
            conservation.
          </Text>
          <Text className="sub-heading-one" color="#fff" mb="35px">
            STAY TUNA-ED! :)
          </Text>
          <Button className="btn" mb={{ base: "100px", lg: "inherit" }}>
            Dive deeper
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default BigfishfiBack;
