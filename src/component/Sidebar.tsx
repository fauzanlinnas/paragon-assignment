import React from "react";
import { VStack, Box, Text, Button } from "@chakra-ui/react";
import { ChatIcon, PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Sidebar: React.FC = () => {
  return (
    <Box width="250px" backgroundColor="gray.200" padding="4">
      <VStack spacing={4} align="stretch">
        <Button size="lg" colorScheme="teal" justifyContent="flex-start">
          <ChatIcon boxSize={6} />
          <Text>Chat</Text>
        </Button>
        <Button size="lg" colorScheme="teal" justifyContent="flex-start">
          <PhoneIcon boxSize={6} />
          <Text>Toko</Text>
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          justifyContent="flex-start"
          mt="auto"
        >
          <ChevronDownIcon boxSize={6} />
          <Text>Keluar</Text>
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
