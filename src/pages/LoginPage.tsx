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
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={6} isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon />}
                />
                <Input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </InputGroup>
              {errors.email && (
                <Text color="red.500" fontSize="sm" mt={1}>
                  {errors.email.message as string}
                </Text>
              )}
            </FormControl>
            <FormControl mb={2} isInvalid={!!errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PasswordIcon />}
                />
                <Input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </InputGroup>
              {errors.password && (
                <Text color="red.500" fontSize="sm" mt={1}>
                  {errors.password.message as string}
                </Text>
              )}
            </FormControl>
            <Link color="#808080" fontSize="sm" mb={6} alignSelf="flex-end">
              Lupa password?
            </Link>
            <Button w="full" bgColor="#0C4AC0" color="white" type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
