import { Box, Container, Flex, Text, Img, Button } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      w="100%"
      bgImage="url(hero-bg.svg)"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container
        maxW="1440px"
        m="auto"
        p={{
          base: "50px 20px 40px",
          md: "82.69px 50px 120px ",
          xl: "82.69px 67.1px 120px 140px",
        }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", lg: "row" }}
          mb={{ base: "95px", md: "88.64px" }}
        >
          <Box w={{ base: "100%", md: "602px" }}>
            <Text
              className="top-heading"
              color="#fff"
              mb="10px"
              pr={{ base: "0", lg: "10px" }}
            >
              Tired of Feeling Like a Fish Out of Water?
            </Text>
            <Text className="main-heading" color="#fff" mb="30px">
              Join the BigFishFi Community
            </Text>

            <Text
              className="info-text "
              color="#D4D2E8"
              mb={{ base: "40px", md: "50px" }}
            >
              A Decentralized, Open and Community-Led Memecoin That&apos;s
              Growing Daily Into a Thriving Ecosystem of Possibilities!
            </Text>

            <Button className="btn" mb={{ base: "30px", lg: "0" }}>
              Dive deeper
            </Button>
          </Box>

          <Box
            w={{ base: "100%", md: "591.9px" }}
            h={{ base: "352px", md: "502.67px" }}
          >
            <Img w="100%" h="100%" src="/hero-fish.svg" alt="fish" />
          </Box>
        </Flex>

        <Box
          maxW="1160px"
          minH="240px"
          bg="#2F265B"
          borderRadius="25px"
          p={{ base: "43px 29px", md: "56px 100px" }}
          textAlign="center"
        >
          <Text className="sub-heading-two" color="#D4D2E8" fontWeight="normal">
            $BIIG, $SWIM, $SCOUR, $SEEK — MegaloSwap — Innovative Reward System
            — The Artist Colony and NFT Projects —10 thousand and counting have
            already joined the best decentralised digital community in the
            world, we are growing – come join us!
          </Text>
          <Text className="sub-heading-two" color="#D4D2E8">
            Be a BigFish in a BigPond!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
