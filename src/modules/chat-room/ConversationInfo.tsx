import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import ShopTag from "../../component/ShopTag";
import { CloseIcon, TokopediaIcon } from "../../assets/icons";

type ConversationInfoProps = {
  setIsInfoExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConversationInfo = ({ setIsInfoExpanded }: ConversationInfoProps) => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      width="239px"
      flexShrink={0}
      py={16}
      position="relative"
    >
      <Button
        position="absolute"
        top="23px"
        right="16px"
        bg="none"
        borderRadius="full"
        p={0}
        onClick={() => setIsInfoExpanded(false)}
      >
        <CloseIcon />
      </Button>
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
