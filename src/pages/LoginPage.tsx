import React from "react";
import {
  Flex,
  Box,
  Center,
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authActions";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch the login action
    dispatch(login());
  };
  return (
    <Flex minHeight="100vh">
      <Box flex="1" bg="blue.500" />
      <Flex
        flexDirection="column"
        flex="1"
        p={8}
        textAlign="center"
        justifyContent="center"
      >
        <Center>
          <Image src="/path/to/your/image.jpg" maxW="200px" borderRadius="md" />
        </Center>
        <Box mt={8}>
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input type="email" id="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input type="password" id="password" name="password" />
          </FormControl>
          <Button colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
