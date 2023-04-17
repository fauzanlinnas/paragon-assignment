import { useState } from "react";
import Sidebar from "../component/Sidebar";
import ChatList from "../modules/chat-room/ChatList";
import { Flex } from "@chakra-ui/react";
import Conversation from "../modules/chat-room/Conversation";
import ConversationInfo from "../modules/chat-room/ConversationInfo";

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [activeChat, setActiveChat] = useState<null | object>(null);
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  return (
    <Flex height="100vh">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />
      <Conversation
        activeChatData={activeChat}
        setIsInfoExpanded={setIsInfoExpanded}
      />
      {isInfoExpanded && <ConversationInfo />}
    </Flex>
  );
};

export default ChatPage;
