import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  const buttonBackground = useColorModeValue("teal.200", "teal.700");
  const buttonColor = useColorModeValue("#000", "#fff");
  return (
    <Box lineHeight="1.6">
      <Heading>404 not found</Heading>
      <Text fontSize="md">
        Look like the page you want to visit doesn't exit
      </Text>
      <Link to="/">
        <Button bg={buttonBackground} color={buttonColor} leftIcon={<FaHome />}>
          <Text pl={4}>Back to main page</Text>
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
