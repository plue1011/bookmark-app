import { useState,useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  chakra,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Password(){
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const { register, errors, handleSubmit, watch } = useForm({});
    return(
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
                    type="password"
                    {...register("userName", {
                    required: "This is required",
                    minLength: { value: 4, message: "Minimum length should be 4" }
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
      </FormControl>
    )
}