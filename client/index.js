import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import store from "./store";
import "./styles.css";
import { HashRouter } from "react-router-dom";

render(
  <Provider store={store}>
    <HashRouter>
      <ChakraProvider >
        <App/>
      </ChakraProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
