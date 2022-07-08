import { GridItem, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ username, photo }) => {
  return (
    <GridItem
      display="flex"
      flexDirection="row"
      alignItems="center"
      shadow="md"
    >
      <Image
        borderRadius={"full"}
        boxSize={50}
        alt={`${username}'s photo`}
        src={photo}
      />
      <Box pl={4}>
        <Text fontSize="xl">{username}</Text>
        <Text opacity="40%">
          <Link to={`/user/${username}`}>Visit profile</Link>
        </Text>
      </Box>
    </GridItem>
  );
};

export default UserCard;
