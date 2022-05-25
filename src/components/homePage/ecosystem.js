import { Box, Container, Flex, Text, Img, Button } from "@chakra-ui/react";

const Ecosystem = () => {
  return (
    <Box w="100%" h={{ base: "1000px", lg: "680px" }} bg="#0008BF" pos="relative">
      <Box
        w="100%"
        h="100%"
        bgImage="url(ecosystem-bg.svg)"
        bgPosition={{ base: "bottom left", lg: "bottom" }}
        bgSize="cover"
        bgRepeat="no-repeat"
        pos="absolute"
      >
        <Container
          maxW="1440px"
          m="auto"
          p={{ base: "50px 20px 55px", md: "93px 50px 60.7px  ", xl: "93px 140px 60.7px " }}
        >
          <Flex
            justify="space-between"
            alignItems="flex-start"
            flexDirection={{ base: "column-reverse", lg: "row" }}
          >
            <Box
              w={{ base: "245px", md: "288px" }}
              h={{ base: "381.35px", lg: "auto" }}
              mt={{ base: "0", md: "51px" }}
            >
              <Img w="100%" h="100%" src="/eco-fish.svg" alt="fish" />
            </Box>

            <Box w={{ base: "100%", lg: "839px" }}>
              <Box
                w={{ base: "100%", md: "620px" }}
                minH="120px"
                mb={{ base: "30px", md: "47px" }}
                ml="auto"
              >
                <Box
                  w={{ base: "100%", md: "575px" }}
                  bg="#39477A"
                  borderRadius="25px"
                  p={{ base: "26px 27px 25px 34px", md: "45px 56px 41px" }}
                >
                  <Text className="sub-heading-three" color="#fff">
                    Tell Me About the Project & Ecosystem
                  </Text>
                </Box>

                <Box className="arrow" />
              </Box>

              <Box w={{ base: "100%", md: "628px" }} minH="287px">
                <Box
                  w={{ base: "100%", md: "574px" }}
                  bg="#39477A"
                  ml="auto"
                  borderRadius="25px"
                  p={{ base: "27px 30px 26px", md: "40px 45px 44px 40px" }}
                >
                  <Text className="para-text" color="#D4D2E8">
                    BigFishFi Token has always taken a unique approach to problem solving from the
                    very beginning.
                    <br /> Our company&apos;s founder, Ona Nyksund, began with a supply of one
                    trillion tokens. <br />
                    <br /> We are here to enable seamless community-based, true decentralisation.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Ecosystem;
