import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  DrawerBody,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        w="37px"
        h="33px"
        p="0"
        ref={btnRef}
        onClick={onOpen}
        bgColor="transparent"
      >
        <Image
          src="/icon/menu.svg"
          alt="nav_logo"
          boxSize="33px"
          objectFit="cover"
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="rgba(47, 38, 91, 1)" minH="896px">
          <Flex justifyContent="space-between" p="25px 20px">
            <Image
              width={{ base: "208px", sm: "131px" }}
              src="/icon/nav_logo.svg"
              alt="logo"
            />
            <DrawerCloseButton w="37px" position="relative">
              <Image
                w="37px"
                src="/icon/cross_menu.svg"
                alt="logo"
                position="absolute"
              />
            </DrawerCloseButton>
          </Flex>
          <Text w="100%" height="2px" bg="rgba(61, 51, 111, 1)" />
          <DrawerBody>
            <Flex flexDirection="column" mt="100px">
              <Link href="/About">
                <a className={`${"nav_link"} ${"nav_list"}`}>About</a>
              </Link>
              <Link href="/Available Tokens">
                <a className={`${"nav_link"} ${"nav_list"}`}>
                  Available Tokens
                </a>
              </Link>
              <Link href="/How to purchase">
                <a className={`${"nav_link"} ${"nav_list"}`}>How to purchase</a>
              </Link>
              <Link href="/How to start">
                <a className={`${"nav_link"} ${"nav_list"}`}>How to start</a>
              </Link>
            </Flex>
            <Button
              W="153px"
              fontSize="20px"
              fontWeight="700"
              bg="#fff"
              color="#1A174C"
              borderRadius="35px"
              p="11px 44px"
              h="auto"
            >
              Log in
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default BasicUsage;
