import { VStack, Box, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";
import { ChatIcon, LogoutIcon, TokoIcon } from "../assets/icons";

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
      <Text mt={2} color="#0C4AC0" fontSize="sm" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
};

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const dispatch = useDispatch();

  return (
    <Box width="115px" borderRight="1px solid #EBEBEB">
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
            icon={<ChatIcon />}
            isActive={activeTab === "chat"}
          />
          <NavItem
            onClick={() => setActiveTab("toko")}
            value="Toko"
            icon={<TokoIcon />}
            isActive={activeTab === "toko"}
          />
        </VStack>
        <NavItem
          onClick={() => dispatch(logout())}
          value="Keluar"
          icon={<LogoutIcon />}
          isActive={false}
        />
      </VStack>
    </Box>
  );
};

export default Sidebar;
