import { Box, Container, Flex, Text, Img, Button } from "@chakra-ui/react";

const Ecosystem = () => {
  return (
    <Box
      id="About"
      w="100%"
      h={{ base: "1000px", lg: "680px" }}
      bg="#0008BF"
      pos="relative"
      mb={{ base: "70px", md: "130px" }}
    >
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
          p={{
            base: "50px 20px 55px",
            md: "93px 50px 60.7px  ",
            xl: "93px 140px 60.7px ",
          }}
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
              <Flex
                align="center"
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
                  ml={{ base: "auto", md: "100px", xl: "0" }}
                >
                  <Text className="sub-heading-three" color="#fff">
                    Tell Me About the Project & Ecosystem
                  </Text>
                </Box>

                <Box>
                  <Img w="45px" h="54px" src="/arrow-1.svg" alt="fish" />
                </Box>
              </Flex>

              <Flex
                flexDirection={{ base: "column-reverse", lg: "row" }}
                w={{ base: "100%", md: "628px" }}
                minH="287px"
              >
                <Box mt={{ base: "0", lg: "58px" }}>
                  <Img
                    display={{ base: "none", lg: "block" }}
                    transform="rotate3d(37, 1, 1, 154deg)"
                    w="54px"
                    h="60px"
                    src="/arrow-2.svg"
                    alt="fish"
                  />
                  <Img
                    display={{ base: "block", lg: "none" }}
                    transform="rotate(89deg)"
                    w="54px"
                    h="60px"
                    src="/arrow-1.svg"
                    alt="fish"
                    m={{ base: "-4px 50px 0 auto", md: "-4px 133px 0 auto" }}
                  />
                </Box>
                <Box
                  w={{ base: "100%", md: "574px" }}
                  bg="#39477A"
                  ml="auto"
                  mr={{ base: "auto", md: "100px", xl: "0" }}
                  borderRadius="25px"
                  p={{ base: "27px 30px 26px", md: "40px 45px 44px 40px" }}
                >
                  <Text className="para-text" color="#D4D2E8">
                    BigFishFi Token has always taken a unique approach to
                    problem solving from the very beginning.
                    <br /> Our company&apos;s founder, Ona Nyksund, began with a
                    supply of one trillion tokens. <br />
                    <br /> We are here to enable seamless community-based, true
                    decentralisation.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Ecosystem;
