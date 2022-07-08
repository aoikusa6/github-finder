import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { GithubProvider } from "./context/GithubContext";

function App() {
  const appBackground = useColorModeValue("gray.200", "gray.700");
  const appColor = useColorModeValue("#000", "#fff");
  const mainBackground = useColorModeValue("gray.100", "gray.600");
  const mainColor = useColorModeValue("#000", "#fff");
  return (
    <GithubProvider>
      <Flex
        direction="column"
        justify="space-between"
        bg={appBackground}
        color={appColor}
        minHeight="100vh"
      >
        <Navbar />
        <Box bg={mainBackground} color={mainColor} flexGrow={1} py={4}>
          <Box w="80%" mx="auto">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/user/:username" element={<User />}></Route>
              <Route path="/notfound" element={<NotFound />}></Route>
              <Route path="/*" element={<Home />}></Route>
            </Routes>
          </Box>
        </Box>
        <Footer />
      </Flex>
    </GithubProvider>
  );
}

export default App;
