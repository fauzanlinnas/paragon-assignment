import { VStack, Box, Text } from "@chakra-ui/react";
import { ChatIcon, PhoneIcon } from "@chakra-ui/icons";

type NavItemProps = {
  onClick: () => void;
  value: string;
  icon: JSX.Element;
  isActive: boolean;
};

type SidebarProps = {
  activeTab: string;
  setActiveTab: (s: string) => void;
};

const NavItem = ({ onClick, value, icon, isActive }: NavItemProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={6}
      cursor="pointer"
      bg={isActive ? "#E6F5FC" : "white"}
      onClick={onClick}
    >
      {icon}
      <Text mt={2}>{value}</Text>
    </Box>
  );
};

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <Box width="115px">
      <VStack
        align="stretch"
        spacing={0}
        justifyContent="space-between"
        h="full"
      >
        <VStack align="stretch" spacing={0}>
          <NavItem
            onClick={() => setActiveTab("chat")}
            value="Chat"
            icon={<ChatIcon boxSize={6} />}
            isActive={activeTab === "chat"}
          />
          <NavItem
            onClick={() => setActiveTab("toko")}
            value="Toko"
            icon={<PhoneIcon boxSize={6} />}
            isActive={activeTab === "toko"}
          />
        </VStack>
        <NavItem
          onClick={() => {}}
          value="Toko"
          icon={<PhoneIcon boxSize={6} />}
          isActive={false}
        />
      </VStack>
    </Box>
  );
};

export default Sidebar;
