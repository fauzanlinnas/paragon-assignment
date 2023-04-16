import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Divider,
  IconButton,
  Avatar,
} from "@chakra-ui/react";

const ChatPage: React.FC = () => {
  return (
    <Flex minHeight="100vh">
      <Box w="20%" bg="gray.100" p={4}>
        <VStack spacing={4} align="stretch">
          <Box>
            <Avatar size="md" name="John Doe" src="/path/to/your/avatar.jpg" />
            <Text mt={2}>John Doe</Text>
          </Box>
          <Divider />
          <Text fontWeight="bold">Chat</Text>
          {/* Add your chatroom component here */}
          <Text fontWeight="bold">Toko</Text>
          {/* Add your shop list component here */}
          <Text fontWeight="bold">Keluar</Text>
          <IconButton icon={<></>} aria-label="Logout" />
        </VStack>
      </Box>
      <Box flex="1" p={4}>
        {/* Add your chat UI that looks like WhatsApp web here */}
      </Box>
    </Flex>
  );
};

export default ChatPage;
