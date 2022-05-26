import React from "react";
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
const BigfishfiBack = () => {
  return (
    <Box w="100%">
      <Box
        maxW="1440px"
        p={{ base: "25px 20px", md: "20px 30px", xl: "0 239px 26.82px 140px" }}
      >
        <Flex
          justifyContent="space-between"
          minH="626px"
          flexDirection={{ base: "column", lg: "inherit" }}
        >
          <Box maxW={{ base: "100%", lg: "506px" }}>
            <Heading
              maxW={{ base: "373px", lg: "655px" }}
              fontSize="30px"
              lineHeight="42px"
              fontWeight="700"
              color="#fff"
              mb="30px"
            >
              Is BigFishFi Giving Back?
            </Heading>
            <Text className="fishBack_para">
              BigFishFi Token loves its Rainbow Snapper mascot (and all its sea
              pals). Our crew is actively seeking ways to help our beloved
              marine life and our beautiful oceans;
            </Text>
            <Text className="fishBack_para">This inspired AzureWay.</Text>
            <Text className={`${"fishBack_para"} ${"fisfi_para"}`}>
              Joining #AzureWay is easy and just takes a few clicks. Join our
              movement today and start impacting change. Overfishing is one of
              the world&apos;s most pressing environmental issues.
            </Text>
          </Box>
          <Box
            maxW={{ base: "100%", lg: "467px" }}
            pt={{ base: "30px", lg: "200px" }}
          >
            <Text className="fishBack_para">
              We can help marine life maintain the Earth&apos;s temperature by
              minimising overfishing. Oceans are the planet&apos;s largest
              carbon sink.
            </Text>
            <Text className="fishBack_para">
              AzureWay&apos;s purpose is to improve ocean governance through
              top-down and bottom-up approaches and to help local communities on
              the front lines of marine and environmental conservation.
            </Text>
            <Heading
              fontSize="30px"
              lineHeight="48px"
              fontWeight="700"
              color="#fff"
              mb="35px"
            >
              STAY TUNA-ED! :)
            </Heading>
            <Button
              w="214px"
              minH="65px"
              p="19px 46px"
              borderRadius="35px"
              bg="linear-gradient(234.39deg, #ECD792 -24.67%, #EEC867 47.71%, #DAAD42 97.67%)"
              boxShadow="0px 15px 35px rgba(232, 208, 136, 0.2)"
              color="rgba(89, 67, 24, 1)"
              mb={{ base: "100px", lg: "inherit" }}
            >
              Dive deeper
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default BigfishfiBack;
