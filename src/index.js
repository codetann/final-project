import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "./context/ContextProvider";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
