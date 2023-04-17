import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FilterIcon, SearchIcon, TokopediaIcon } from "../../assets";

const conversationList = [
  {
    profilePicture: "",
    contactName: "Penggemar Pitu Chat",
    latestMsg:
      "Untuk kaos kaki motif stripes warna pink nya akan direstock kapan yaa? Thankss",
    lastMsgTime: "Today",
    shopName: "Beauty Lovers",
    shopIcon: <SearchIcon />,
    unreadCount: 3,
  },
  {
    profilePicture: "",
    contactName: "Lorem Ipsum Title",
    latestMsg: "This is the preview of text we received from the buyers",
    lastMsgTime: "Today",
    shopName: "Beauty Lovers",
    shopIcon: <SearchIcon />,
    unreadCount: 2,
  },
  {
    profilePicture: "",
    contactName: "Christina Lee",
    latestMsg: "This is the preview of long text that might not appear all",
    lastMsgTime: "Yesterday",
    shopName: "Beauty Lovers",
    shopIcon: <SearchIcon />,
    unreadCount: 2,
  },
];

type ChatListProps = {
  activeChat: object | null;
  setActiveChat: (el: object) => void;
  setIsInfoExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatList = ({
  activeChat,
  setActiveChat,
  setIsInfoExpanded,
}: ChatListProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("unread");

  return (
    <Box w="359px">
      <HStack justifyContent="space-between" py="25px" px={4}>
        <Text fontSize="xl" fontWeight="bold">
          Chat
        </Text>
        <HStack spacing={6}>
          <SearchIcon />
          <Button onClick={() => setIsInfoExpanded((oldState) => !oldState)}>
            <FilterIcon />
          </Button>
        </HStack>
      </HStack>
      <HStack spacing={0} justifyContent="space-around">
        <Text
          flex={1}
          whiteSpace="nowrap"
          textAlign="center"
          py="22px"
          borderBottom="3px solid"
          fontWeight={activeFilter === "unread" ? "bold" : "semibold"}
          borderBottomColor={activeFilter === "unread" ? "#0C4AC0" : "#EBEBEB"}
          color={activeFilter === "unread" ? "#1A1A1A" : "#808080"}
          onClick={() => setActiveFilter("unread")}
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="sm"
        >
          Perlu balas
          <Text
            as="span"
            borderRadius="full"
            bg="#0C4AC0"
            color="white"
            height={4}
            width={4}
            fontSize="2xs"
            ml={2}
          >
            3
          </Text>
        </Text>
        <Text
          flex={1}
          whiteSpace="nowrap"
          textAlign="center"
          py="22px"
          borderBottom="3px solid"
          fontWeight={activeFilter === "replied" ? "bold" : "semibold"}
          borderBottomColor={activeFilter === "replied" ? "#0C4AC0" : "#EBEBEB"}
          color={activeFilter === "replied" ? "#1A1A1A" : "#808080"}
          onClick={() => setActiveFilter("replied")}
          cursor="pointer"
          fontSize="sm"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Terbalas
        </Text>
        <Text
          flex={1}
          whiteSpace="nowrap"
          textAlign="center"
          py="22px"
          borderBottom="3px solid"
          fontWeight={activeFilter === "all" ? "bold" : "semibold"}
          borderBottomColor={activeFilter === "all" ? "#0C4AC0" : "#EBEBEB"}
          color={activeFilter === "all" ? "#1A1A1A" : "#808080"}
          onClick={() => setActiveFilter("all")}
          cursor="pointer"
          fontSize="sm"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Semua chat
        </Text>
      </HStack>
      <VStack spacing={0}>
        {conversationList.map((val, i) => (
          <HStack
            px={4}
            py={6}
            alignItems="flex-start"
            onClick={() => setActiveChat(val)}
            bg={true ? "#F5F5F5" : "white"}
          >
            <Avatar
              width="40px"
              height="40px"
              src="https://via.placeholder.com/48"
            />
            <VStack alignItems="flex-start" spacing="10px">
              <HStack align="center" w="full">
                <Text flex={1} fontWeight="bold" color="#1A1A1A">
                  {val.contactName}
                </Text>
                <Text fontWeight="medium" color="#4D4D4D" fontSize="2xs">
                  Today
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="xs" noOfLines={1}>
                  {val.latestMsg}
                </Text>
                <Text
                  flexShrink="0"
                  borderRadius="full"
                  bg="#0C4AC0"
                  color="white"
                  height={4}
                  width={4}
                  fontSize="2xs"
                  ml={2}
                  textAlign="center"
                >
                  {val.unreadCount}
                </Text>
              </HStack>
              <HStack
                bg="#D9F2E3"
                borderRadius="base"
                px={2}
                py={1}
                spacing={1}
              >
                <TokopediaIcon />
                <Text fontSize="2xs" color="#1A1A1A" fontWeight="medium">
                  {val.shopName}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ChatList;
