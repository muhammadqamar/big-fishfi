import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
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
    para: "SWIM has a total quantity of 300,000,000 tokens, and its circulation supply is intended to lie precisely in the middle of that of the two tokens that came before it. The token is also a Governance token, which means that members of the #ShoalSociety who HODL it will be able to vote on upcoming proposals on our Neptune DAO.",
  },
];
const Tokens = () => {
  return (
    <Box
      id="Available-Tokens"
      maxW="1440px"
      p={{ base: "25px 20px", md: "20px 30px", xl: "20px  140px" }}
      m="auto"
    >
      <Text maxW="494px" className="sub-heading-one" color="rgba(255, 255, 255, 1)">
        What Are The Available Tokens?
      </Text>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "inherit" }}
        mt={{ base: "inherit", lg: "50px" }}
      >
        {card.map((item, index, count) => (
          <Box
            w={{ base: "100%", lg: "365px" }}
            minH={{ base: "426px", lg: "547px" }}
            borderRadius="20px"
            bg="#2F265B"
            className="border-color"
            mt={{ base: "50px", lg: "0" }}
            ml={{ base: index === 1 && "0", lg: index === 1 && "14px" }}
            mr={{ base: index === 1 && "0", lg: index === 1 && "14px" }}
            key={count}
            pos="relative"
            _before={{
              content: `''`,
              zIndex: "-1",
              borderRadius: "20px",
              pos: "absolute",
              top: "-1px",
              left: "-1px",
              w: { base: "100%", lg: "367px" },
              minH: { base: "428px", lg: "549px" },
              bg: "Linear-Gradient( rgba(255, 255, 255, 1), rgba(21, 24, 64, 1))",
            }}
          >
            <Flex
              width="100%"
              alignItems="center"
              borderRadius="20px"
              bg="rgba(255, 255, 255, 0.1)"
              p={{ base: "11px 27px", lg: "11px 0 11px 27px" }}
            >
              <Image w="58px" h="58px" src={item.img} alt="card_img" />
              <Text
                className="sub-heading-two"
                lineHeight="140%"
                color="#fff"
                textTransform="uppercase"
              >
                {item.heading}
              </Text>
            </Flex>

            <Text
              w="100%"
              className="para-text "
              p="30px 19px 34px 30px"
              color="rgba(212, 210, 232, 1)"
              textAlign="left"
            >
              {item.para}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Tokens;
