import { useState } from "react";
import {
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
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const getUserExist = async (userName,password) => {
    const url = `http://127.0.0.1:8010/signup?name=${userName}&password=${password}`;
    const json = await axios.post(url)
        .then(res => {
            return res.data
        }
    )
    console.log(url)
    return json.status
}

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [password, setPassword] = useState("");
  const handlePassword = (event) => setPassword(event.target.value);

  const [userName, setUserName] = useState("");
  const [userExist, setUserExist] = useState(true);

  const handleUser = async (event) => {
    setUserName(event.target.value);
    let userExistTemp = await getUserExist(event.target.value,password);
    setUserExist(userExistTemp);
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
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                   onChange={handleUser}
                   type="text"
                   placeholder="user name" />
                </InputGroup>
                {userExist
                    ?<Text fontSize='16px' color='tomato'>{userExist.toString()}</Text>
                    :<Text fontSize='16px' color='tomato'>User name already exists</Text>
                }
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    onChange={handlePassword}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  {/* <Link>forgot password?</Link> */}
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Have an account?{" "}
        <Link color="teal.500" href="Signin">
          Sign In
        </Link>
      </Box>
    </Flex>
  );
};

export default Signup;