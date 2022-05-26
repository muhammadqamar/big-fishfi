import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
const card = [
  {
    img: "/icon/card_layer.svg",
    heading: "$biig token",
    para: "The BigFishFi token is our basic digital currency, and investors are able to store thousands, millions, or even trillions of it in their wallets thanks to its decentralised nature.BIIG is constantly increasing its reach thanks to the international notoriety it has earned as well as the legitimate utility it provides. BIIG is the first digital asset to be listed and rewarded on MegaloSwap, our very own decentralised exchange (DEX).",
  },
  {
    img: "/icon/card_layer.svg",
    heading: "$scour token",
    para: "The purpose of the SCOUR token was changed from that of a rebase token to that of a token with unrestricted potential when the rebase function was disabled. It symbolises the opposite end of the spectrum of our Ecosystem, with a total supply of ONLY 110,000 tokens available for purchase. As the second token to be incentivized on MegaloSwap, SCOUR will provide its holders with significant benefits if and when they contribute to the token's liquidity.",
  },
  {
    img: "/icon/card_layer.svg",
    heading: "$swim token",
    para: "SWIM has a total quantity of 300,000,000 tokens, and its circulation supply is intended to lie precisely in the middle of that of the two tokens that came before it.The token is also a Governance token, which means that members of the #ShoalSociety who HODL it will be able to vote on upcoming proposals on our Neptune DAO.",
  },
];
const Tokens = () => {
  return (
    <Box w="100%">
      <Box
        maxW="1440px"
        p={{ base: "25px 20px", md: "20px 30px", xl: "20px  140px" }}
        m="auto"
      >
        <Heading
          maxW="494px"
          fontSize="30px"
          lineHeight="42px"
          fontWeight="700"
          color="rgba(255, 255, 255, 1)"
        >
          What Are The Available Tokens?
        </Heading>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", lg: "inherit" }}
          mt={{ base: "inherit", lg: "50px" }}
        >
          {card.map((item, count) => (
            <Box
              w={{ base: "100%", lg: "367px" }}
              minH={{ base: "428px", lg: "549px" }}
              border="1px solid"
              border-image-source="linear-gradient(180deg, #FFFFFF 0%, #151840 100%)"
              border-image-slice="1"
              borderRadius="20px"
              bg="#2F265B"
              mt={{ base: "50px", lg: "0" }}
              mr={{ base: "0", lg: "10px" }}
              key={count}
            >
              <Flex
                width="100%"
                alignItems="center"
                borderRadius="20px"
                bg="rgba(255, 255, 255, 0.1)"
                p={{ base: "11px 27px", lg: "11px 0 11px 27px" }}
              >
                <Image w="58px" h="58px" src={item.img} alt="card_img" />
                <Heading
                  fontSize="20px"
                  lineHeight="28px"
                  fontWeight="700"
                  color="#fff"
                  textTransform="uppercase"
                >
                  {item.heading}
                </Heading>
              </Flex>
              <Text
                maxW={{ base: "100%", lg: "315px" }}
                minH={{ base: "288px", lg: "378px" }}
                fontSize="18px"
                lineHeight="27px"
                fontWeight="400"
                color="rgba(212, 210, 232, 1)"
                p="30px 21px 0px 31px"
                textAlign="left"
              >
                {item.para}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Tokens;
