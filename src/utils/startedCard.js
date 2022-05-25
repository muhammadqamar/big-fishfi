import { Box, Flex, Text } from "@chakra-ui/react";

const StartedCard = ({ data, index }) => {
  return (
    <Flex
      w={{ base: "374px", lg: index === 1 ? "529px" : "469.6px" }}
      h={{ base: "374.05px", lg: index === 1 ? "529.07px" : "469.67px" }}
      top={{
        base: "0",
        lg:
          (index === 0 && "0") ||
          (index === 1 && "200px") ||
          (index === 2 && "600px") ||
          (index === 3 && "800px"),
      }}
      right={(index === 1 && "0") || (index === 3 && "0")}
      bgImage="url(buluan.svg)"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      justify="center"
      align="center"
      pos={{ base: "inherit", lg: "absolute" }}
      mb={{ base: "20px", lg: "0" }}
    >
      <Box w={{ base: "285px", lg: "350px" }} p={{ base: "10px", lg: "0" }}>
        <Flex justify="space-between" align="center" mb={{ base: "6px", lg: "10px" }}>
          <Box
            flexShrink="0"
            fontWeight="700"
            className="nmb-box sub-heading-three"
            color="#9A6722"
            w={{ base: "49px", md: "70px" }}
            h={{ base: "49px", md: "70px" }}
          >
            {data.id}
          </Box>
          <Text
            ml={{ base: "15px", lg: "20px" }}
            className="sub-heading-two"
            lineHeight="140%"
            fontSize={{ base: "18px", lg: "20px" }}
            color="#FFFFFF"
          >
            {data.title}
          </Text>
        </Flex>
        <Text
          className="para-text"
          fontSize={{ base: "14px", lg: "18px" }}
          color="#D4D2E8"
          pl={{ base: "27px", lg: "0" }}
        >
          {data.about}
        </Text>
      </Box>
    </Flex>
  );
};

export default StartedCard;
