import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Signin from "./Signin";
import Signup from "./Signup";
import PersonList from "./get";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <PersonList />
);

// ReactDOM.render(
//   <StrictMode>
//     <ChakraProvider>
//       <Signin />
//       <Signup />
//       <PersonList />
//     </ChakraProvider>
//   </StrictMode>,
//   rootElement
// );
