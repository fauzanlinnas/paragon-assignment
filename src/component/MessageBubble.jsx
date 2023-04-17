import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

const OutgoingMessage = ({ messages, message, index }) => {
  return (
    <Box mb={messages[index + 1]?.isSent ? 1 : 3}>
      <Box
        bg="#0C4AC0"
        borderRadius="3xl"
        borderBottomRightRadius="none"
        px={3}
        py="10px"
        minW="284px"
      >
        <Text fontSize="sm" color="white">
          {message.message}
        </Text>
      </Box>
      {messages[index + 1]?.isSent ? null : (
        <Text fontSize="xs" textAlign="right" pr={3}>
          Sent · {message.timeSent}
        </Text>
      )}
    </Box>
  );
};

const IncomingMessage = ({ messages, message, index }) => {
  return (
    <Box mb={!messages[index + 1]?.isSent && !messages[index]?.isSent ? 1 : 3}>
      <Text fontSize="xs" pl={12} mb={1}>
        {message.senderName}
      </Text>
      <HStack spacing={1} align="flex-end" mb="2px">
        <Avatar size="sm" src={message.profilePicture} />
        <Box
          borderRadius="3xl"
          borderBottomLeftRadius="none"
          bg="white"
          py="10px"
          px={3}
        >
          <Text fontSize="sm">{message.message}</Text>
        </Box>
      </HStack>
      {!messages[index + 1]?.isSent && !messages[index]?.isSent ? null : (
        <Text fontSize="xs" pl={12}>
          {message.timeSent}
        </Text>
      )}
    </Box>
  );
};

export { OutgoingMessage, IncomingMessage };
