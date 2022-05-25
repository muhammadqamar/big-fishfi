import React from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
const MegaloSwap = () => {
  return (
    <Box w="100%">
      <Box
        maxW="1440px"
        p={{ base: "25px 20px", md: "20px 30px", xl: "20px  140px" }}
        m="auto"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column-reverse", lg: "inherit" }}
        >
          <Image
            w="445.38px"
            h="290.42px"
            src="/icon/megalo_img.svg"
            alt="megaloFish_logo"
          />
          <Box maxW="565px">
            <Heading
              w={{ base: "100%", lg: "339px" }}
              fontSize="30px"
              lineHeight="42px"
              fontWeight="700"
              color="#fff"
              mb="30px"
            >
              What is MegaloSwap?
            </Heading>
            <Text
              maxw="565px"
              fontSize="18px"
              lineHeight="28.8px"
              fontWeight="400"
              color="rgba(212, 210, 232, 1)"
              textAlign="left"
            >
              The next generation of DeFi platform is here, and it&apos;s called
              MegaloSwap (from the Megalodon Shark). It&apos;s a collaboration
              between BIIG, SWIM and SCOUR. Users of MegaloSwap have the
              opportunity to SEEK (provide liquidity), TRADE (stake), and FISH
              (farm) tokens in order to earn Luminescent Returns by utilising
              our cutting-edge and original passive income incentive system like
              rare seashells (double returns) or rare pearls (triple returns)
              The Shoal Society is also able to gain access to new NFTs and
              extra tools, including portfolio monitors, through our platform,
              which makes navigating the cryptocurrency ocean straightforward
              and most importantly easy for everyone to understand.
            </Text>
          </Box>
        </Flex>
        <Box
          maxW={{ base: "100%", lg: "1170px" }}
          minH={{ base: "730px", lg: "inherit" }}
          bg="rgba(47, 38, 91, 1)"
          borderRadius="25px"
          p={{ base: "20px 26px 40px 25px", lg: "50px 98px 50px 65px" }}
          mt="41.61px"
        >
          <Heading
            maxW="452px"
            fontSize="30px"
            lineHeight="42px"
            fontWeight="700"
            color="#fff"
            mb="30px"
          >
            Is BigFishFi Involved with Art?
          </Heading>
          <Text
            maxW="1007px"
            fontSize="18px"
            lineHeight="28.8px"
            fontWeight="400"
            color="rgba(212, 210, 232, 1)"
          >
            Through the Artist Colony, we are pleased to show our support for
            inventiveness in all of its guises. We recognise that the Shoal
            Society is comprised of exceptionally gifted people who have
            collaborated in order to produce something truly spectacular, and to
            that end, we have fostered an atmosphere that produces creative
            expression and personal development. By using the capabilities of
            the Artist Colony, we assist holders in locating the resources they
            require to bring their ideas and distinctive points of view into the
            real world. This is just one more approach to inspire other people
            to step outside of the boundaries and regulations they have in their
            heads and feel what it is like to be a part of our visionary
            decentralised movement.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MegaloSwap;
