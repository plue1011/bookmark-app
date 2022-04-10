import { useState,useRef } from "react";
import { useForm } from "react-hook-form";import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signin = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const userName = useRef({});
  userName.current = watch("userName", " ");
  const password = useRef({});
  password.current = watch("password", "");

  const [userPasswordExist, setUserPasswordExist] = useState(false);

  const getUserPasswordExist = async (userName,password) => {
    const url = `http://127.0.0.1:8010/signin?name=${userName}&password=${password}`;
    const json = await axios.post(url)
        .then(res => {
            return res.data
        }
    )
    return json.status
  };

  const handleUser = async (event) => {
    const userPasswordExist = await getUserPasswordExist(event.target.value,password.current);
    setUserPasswordExist(userPasswordExist);
  };
  const handleUserPassword = async (event) => {
    const userPasswordExist = await getUserPasswordExist(userName.current,event.target.value);
    setUserPasswordExist(userPasswordExist);
  };

  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {/* User Name の入力 */}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    id="userName"
                    placeholder="user name"
                    {...register("userName", {
                      required: "This is required",
                      onChange: handleUser
                    })}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                      id="password"
                      placeholder="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                      required: "This is required",
                      onChange: handleUserPassword
                      })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {console.log(userPasswordExist)}
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Don't have an account?{" "}
        <Link color="teal.500" href="Signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Signin;