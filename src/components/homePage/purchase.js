import { Box, Container, Flex, Text, Img, Button } from "@chakra-ui/react";

import StartedCard from "../../utils/startedCard";

import { startedData } from "../dummyData";

const Purchase = () => {
  return (
    <Box w="100%" h="2346px" pos="relative">
      <Box
        w="100%"
        h="646px"
        top="101px"
        bgImage="url(purch-bg.svg)"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        pos="absolute"
      />
      <Box
        w="100%"
        h="2090px"
        top="256px"
        bgImage="url(wave-to-s-bg.svg)"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        pos="absolute"
      />
      <Box pos="absolute" w="100%">
        <Container maxW="1440px" m="auto">
          {/* section One */}
          <Flex
            w="100%"
            justify="space-between"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            p={{ base: "50px 20px 55px", md: "93px 20px 60.7px", xl: "77px 120.9px 87.11px 140px" }}
          >
            <Box maxW="583px" mb={{ base: "20px", md: "0" }}>
              <Text className="sub-heading-one" mb="30px" color="#FFFFFF">
                How Do I Purchase?
              </Text>
              <Text className="para-text" color="#D4D2E8">
                The most reliable marketplace for buying and selling BIIG and SCOUR is our
                MegaloSwap platform; however, these items are also available on Uniswap (UNI) and
                PancakeSwap (CAKE). It is important to take into consideration that, apart from
                MegaloSwap, exchanges that support one might not support the other.
                <br /> <br /> Because BIIG is a decentralised experiment, we make it a point to
                encourage the use of DEXs whenever possible. If you decide to use a CEX instead, you
                should make sure to do some research on it beforehand to ensure that it is
                absolutely safe and secure for your capital.
              </Text>
            </Box>

            <Box
              w={{ base: "100%", md: "331px", lg: "507.91px" }}
              h={{ base: "100%", md: "368px", lg: "601.89px" }}
              flexShrink="0"
            >
              <Img w="100%" h="100%" src="/purch-fish-top.svg" alt="fish" />
            </Box>
          </Flex>

          {/* section  Two*/}

          <Box p={{ base: "0 20px 55px", md: "0 20px 60.7px", xl: "0px 140px 217.33px 112px" }}>
            <Text className="sub-heading-one" mb="40px" color="#FFFFFF" pl="30px">
              How Do I Get Started?
            </Text>

            <Box
              pos="relative"
              display={{ base: "flex", lg: "inherit" }}
              flexDirection={{ base: "column", lg: "inherit" }}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                w="854.36px"
                h="1201.6px"
                bgImage="url(lines-bg.svg)"
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                pos="absolute"
                right="0"
                top="65px"
              />
              {startedData.map((item, index) => (
                <StartedCard key={item.id} index={index} data={item} />
              ))}

              <Box
                pos={{ base: "inherit", lg: "absolute" }}
                top={{ base: "0", lg: "1230px" }}
                left={{ base: "0", lg: "160px" }}
                display={{ base: "none", lg: "block" }}
              >
                <Button className="btn">Join</Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Purchase;
