import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { extendTheme } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
        fontFamily: ["Inter", "FontAwesome"],
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
