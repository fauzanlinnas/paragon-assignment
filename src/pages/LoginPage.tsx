import React from "react";
import {
  Flex,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { EmailIcon, Logo, PasswordIcon } from "../assets";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dispatch the login action
    dispatch(login());
    navigate("/chat");
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
        <Logo />
        <Box mb={12}>
          <Text fontSize="3xl" textAlign="left" fontWeight="bold" mb={3}>
            Login ke akunmu{" "}
          </Text>
          <Text textAlign="left">Masuk akun untuk menggunakan PituChat </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <FormControl mb={6}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input type="email" id="email" name="email" />
            </InputGroup>
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<PasswordIcon />}
              />
              <Input type="password" id="password" name="password" />
            </InputGroup>
          </FormControl>
          <Link color={"#808080"} fontSize={"sm"} mb={6} alignSelf="flex-end">
            Lupa password?
          </Link>
          <Button
            w="full"
            bgColor="#0C4AC0"
            onClick={handleLogin}
            color="white"
          >
            Login
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
