import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import ShopTag from "../../component/ShopTag";
import { TokopediaIcon } from "../../assets";

const ConversationInfo = () => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      width="239px"
      flexShrink={0}
      py={16}
    >
      <Avatar
        width="80px"
        height="80px"
        src="https://via.placeholder.com/48"
        mb="38px"
      />
      <Text mb="9px">Christina Lee</Text>
      <Text mb="34px">Tokopedia</Text>
      <ShopTag
        mb="60px"
        shopIcon={<TokopediaIcon />}
        shopName="Beauty Lovers"
      />
      <Box>
        <Text>About conversation</Text>
        <Flex>
          <Text>Created</Text>
          <Text ml={3}>20 October 2022</Text>
        </Flex>
        <Flex>
          <Text>Created</Text>
          <Text ml={3}>20 October 2022</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ConversationInfo;
