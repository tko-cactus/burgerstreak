import React, { useRef, useEffect, useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { HeaderOnly } from "./components/layouts/HeaderOnly";
import { MapboxMap } from "./components/atoms/MapboxMap";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HeaderOnly>
      <p>contents</p>
      {/* <Map /> */}
      <MapboxMap />
    </HeaderOnly>
  </ChakraProvider>
);
