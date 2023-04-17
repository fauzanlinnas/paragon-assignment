import { Box, Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { InfoIcon, SearchIcon } from "../../assets";
import {
  IncomingMessage,
  OutgoingMessage,
} from "../../component/MessageBubble";

type ConversationProps = {
  activeChatData: any;
};

type ChatMessage = {
  id: number;
  message: string;
  isSent: boolean;
  profilePicture: string;
  senderName: string;
  timeSent: string;
};

const Conversation = ({ activeChatData }: ConversationProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      message: "Hello!",
      isSent: false,
      profilePicture: "https://via.placeholder.com/48",
      senderName: "Penggemar PituChat",
      timeSent: "Just Now",
    },
    {
      id: 2,
      message: "Hi there!",
      isSent: true,
      profilePicture: "https://via.placeholder.com/48",
      senderName: "",
      timeSent: "Just Now",
    },
  ]);

  const handleSendMessage = () => {
    if (newMessage) {
      const newChatMessage: ChatMessage = {
        id: messages.length + 1,
        message: newMessage,
        isSent: true,
        profilePicture: "https://via.placeholder.com/48",
        senderName: "",
        timeSent: "Just Now",
      };
      setMessages([...messages, newChatMessage]);
      setNewMessage("");
    }
  };

  return (
    <Stack spacing={0} flex={1}>
      <HStack
        justifyContent="space-between"
        height={16}
        alignItems="center"
        pl={5}
        pr={8}
      >
        <Text fontWeight="bold">Penggemar Pitu Chat</Text>
        <HStack spacing={5}>
          <SearchIcon />
          <InfoIcon />
        </HStack>
      </HStack>
      <Stack
        py={4}
        px={12}
        bg="#CEDBF2"
        flex={1}
        spacing={0}
        justifyContent="flex-end"
      >
        {messages.map((message, i) => (
          <Box
            key={message.id}
            alignSelf={message.isSent ? "flex-end" : "flex-start"}
            maxW="80%"
          >
            {message.isSent ? (
              <OutgoingMessage
                messages={messages}
                message={message}
                index={i}
              />
            ) : (
              <IncomingMessage
                messages={messages}
                message={message}
                index={i}
              />
            )}
          </Box>
        ))}
      </Stack>
      <Stack p={4} direction="row" align="center">
        <Input
          flex="1"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSendMessage}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
};

export default Conversation;