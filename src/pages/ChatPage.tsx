import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../component/Sidebar";
import ChatList from "../component/ChatList";

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState<string>("chat");

  return (
    <Flex height="100vh">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChatList />
      <Box flex="1" padding="4">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default ChatPage;
