import { HStack, StackProps, Text } from "@chakra-ui/react";

type ShopTagProps = {
  shopIcon: JSX.Element;
  shopName: string;
};

const ShopTag = ({
  shopIcon,
  shopName,
  ...rest
}: ShopTagProps & StackProps) => {
  return (
    <HStack
      bg="#D9F2E3"
      borderRadius="base"
      px={2}
      py={1}
      spacing={1}
      {...rest}
    >
      {shopIcon}
      <Text fontSize="2xs" color="#1A1A1A" fontWeight="medium">
        {shopName}
      </Text>
    </HStack>
  );
};

export default ShopTag;
