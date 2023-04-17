import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import ChatList from "../modules/chat-room/ChatList";
import { Box, Flex } from "@chakra-ui/react";
import Conversation from "../modules/chat-room/Conversation";
import ConversationInfo from "../modules/chat-room/ConversationInfo";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { useNavigate } from "react-router-dom";
import TopBar from "../component/TopBar";

const ChatPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [activeChat, setActiveChat] = useState<null | object>(null);
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <Flex flexDirection="column" height="100vh">
      <TopBar />
      <Flex flex={1}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />
        <Conversation
          activeChatData={activeChat}
          setIsInfoExpanded={setIsInfoExpanded}
        />
        {isInfoExpanded && (
          <ConversationInfo setIsInfoExpanded={setIsInfoExpanded} />
        )}
      </Flex>
    </Flex>
  );
};

export default ChatPage;
