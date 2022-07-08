import React, { useContext } from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import {
  Icon,
  Flex,
  Box,
  Link,
  Button,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import GithubContext from "../../context/GithubContext";

const Navbar = ({ title }) => {
  const { dispatch } = useContext(GithubContext);
  const { toggleColorMode } = useColorMode();
  const buttonBackground = useColorModeValue("teal.200", "teal.700");
  const buttonColor = useColorModeValue("#000", "#fff");
  const toggleButton = useColorModeValue(
    <Icon as={FaMoon} />,
    <Icon as={FaSun} />
  );
  return (
    <Box>
      <Flex w="80%" mx="auto">
        <Flex py={4} gap={4} alignItems="center">
          <Icon as={FaGithub} fontSize="3xl" />
          <Link
            as={RouteLink}
            _hover={{ textDecoration: "none" }}
            to="/"
            fontSize="lg"
            fontWeight="bold"
          >
            {title}
          </Link>
        </Flex>
        <Spacer />
        <Flex py={4} gap={4}>
          <Button
            bg={buttonBackground}
            color={buttonColor}
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            <Link as={RouteLink} _hover={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button>
          <Button bg={buttonBackground} color={buttonColor}>
            <Link
              as={RouteLink}
              _hover={{ textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
          </Button>
          <Button
            bg={buttonBackground}
            color={buttonColor}
            onClick={toggleColorMode}
          >
            {toggleButton}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
