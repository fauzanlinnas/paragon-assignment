import { Box, HStack, Image } from "@chakra-ui/react";
import PituChat_Logo from "../assets/images/PituChat_Logo.png";
import { ChevronDown } from "../assets/icons";

const TopBar = () => {
  return (
    <HStack
      spacing={0}
      py={4}
      px="22px"
      pr={8}
      w="full"
      justifyContent="space-between"
      borderBottom="1px solid #EBEBEB"
    >
      <Image src={PituChat_Logo} height="40px" />
      <HStack justifyContent="space-between">
        <Box bg="grey" borderRadius="md" width={8} height={8} />
        <ChevronDown />
      </HStack>
    </HStack>
  );
};

export default TopBar;
