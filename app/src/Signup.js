import { useState,useRef } from "react";
import { useForm } from "react-hook-form";
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
  FormErrorMessage,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const [showPasswordConfigurelation, setShowPasswordConfigurelation] = useState(false);
  const handleShowClickConfigurelation = () => setShowPasswordConfigurelation(!showPasswordConfigurelation);
  const [userExist, setUserExist] = useState(true);
  const userName = useRef({});
  userName.current = watch("userName", "");
  const password = useRef({});
  password.current = watch("password", "");
  const passwordConfigurelation = useRef({});
  passwordConfigurelation.current = watch("passwordConfigurelation", "");

  const getUserExist = async (userName,password) => {
    const url = `http://127.0.0.1:8010/signup?name=${userName}&password=${password}`;
    const json = await axios.post(url)
        .then(res => {
            return res.data
        }
    )
    console.log(url)
    return json.status
  };
  
  const handleUser = async (event) => {
    const userExist = await getUserExist(event.target.value);
    setUserExist(userExist);
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
              <FormControl isInvalid={errors.userName}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    id="userName"
                    placeholder="user name"
                    {...register("userName", {
                      required: "This is required",
                      minLength: { value: 4, message: "Minimum length should be 4" },
                      pattern: { value: /^[A-Za-z0-9]+$/i, message: "Alphabet or number only" },
                      onChange: handleUser
                    })}
                  />
                </InputGroup>
                {!userExist && <Text fontSize='14px' color='red'>User name already exists</Text>}
                <FormHelperText textAlign="right">
                </FormHelperText>
                <FormErrorMessage color='red'>
                  {errors.userName && <Text fontSize='14px' color='red'>{errors.userName.message}</Text>}
                </FormErrorMessage>
              </FormControl>
              {/* Password の入力 */}
              <FormControl  isInvalid={errors.password}>
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
                        minLength: { value: 8, message: "Minimum length should be 8" },
                        pattern: { value: /^[A-Za-z0-9]+$/i, message: "Alphabet or number only" }
                        })}
                    />
                    
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                  </InputGroup>
                <FormHelperText textAlign="right">
                </FormHelperText>
                <FormErrorMessage>
                {errors.password && <Text fontSize='14px' color='red'>{errors.password.message}</Text>}
                </FormErrorMessage>
              </FormControl>
              {/* Password Configurelationの入力 */}
              <FormControl  isInvalid={errors.passwordConfigurelation}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                    <Input
                        id="passwordConfigurelation"
                        placeholder="password configurelation"
                        type={showPasswordConfigurelation ? "text" : "password"}
                        {...register("passwordConfigurelation", {
                            validate: value =>
                            value === password.current || "The passwords do not match"
                        })}
                    />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClickConfigurelation}>
                      {showPasswordConfigurelation ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                  </InputGroup>
                <FormHelperText textAlign="right">
                </FormHelperText>
                <FormErrorMessage>
                {errors.passwordConfigurelation && <Text fontSize='14px' color='red'>{errors.passwordConfigurelation.message}</Text>}
                </FormErrorMessage>
              </FormControl>
              <Link href="/Home">
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                isLoading={isSubmitting} 
              >
                Register
              </Button>
              </Link>
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