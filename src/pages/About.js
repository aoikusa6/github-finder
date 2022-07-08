import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box lineHeight="1.6">
      <Heading>Github Finder</Heading>
      <Text fontSize="md">
        This is test project to practice Chakra UI, React and React Router
        version 6.0
      </Text>
      <Text fontSize="md">
        A React app to search Github profiles and see their details.
      </Text>
      <Text fontSize="md">Version: </Text>
      <Text color="gray.400">1.0.0</Text>
      <Text fontSize="md">Created by: </Text>
      <Text color="gray.400">Thien Ha</Text>
    </Box>
  );
};

export default About;
