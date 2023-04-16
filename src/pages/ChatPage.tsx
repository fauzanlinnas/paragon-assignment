import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../component/Sidebar";

const ChatPage: React.FC = () => {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Box flex="1" padding="4">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default ChatPage;
