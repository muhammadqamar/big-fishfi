import BigfishfiBack from "./bigfishfiBack";
import HeroSection from "./heroSection";
import MegaloSwap from "./megaloSwap";
import Tokens from "./tokens";
import { Box } from "@chakra-ui/react";
import Ecosystem from "./ecosystem";
import Purchase from "./purchase";
const Index = () => {
  return (
    <>
      <HeroSection />
      <Tokens />
      <MegaloSwap />
      <BigfishfiBack />
      <Ecosystem />
      <Purchase />
    </>
  );
};

export default Index;
