import React from "react";
import { Box, Center, Image, Input, Button } from "@chakra-ui/react";

const LoginPage: React.FC = () => {
  return (
    <Box display="flex" minHeight="100vh">
      <Box flex="1" bg="blue.500" />
      <Box flex="1" p={8} textAlign="center">
        <Center>
          <Image src="/path/to/your/image.jpg" maxW="200px" borderRadius="md" />
        </Center>
        <Box mt={8}>
          <Input placeholder="Email" />
          <Input mt={4} type="password" placeholder="Password" />
          <Button mt={4} colorScheme="blue">
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
