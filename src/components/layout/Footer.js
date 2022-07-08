import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

const yearShow = new Date().getFullYear();

const Footer = ({ authorName }) => {
  return (
    <Box>
      <Flex w="80%" mx="auto" py={4} alignItems='center' justifyContent='center'>
        <Img
          boxSize={16}
          display="inline"
          src="https://www.svgrepo.com/show/227822/solar-system.svg"
          alt="Personal img"
        />
        <Text display="inline" fontSize='2xl' fontWeight="bold">
          Copyright &copy; {yearShow} by {authorName}
        </Text>
      </Flex>
    </Box>
  );
};

Footer.defaultProps = {
  authorName: "Le Duy Thien Ha",
};

Footer.propTypes = {
  authorName: PropTypes.string,
};

export default Footer;
