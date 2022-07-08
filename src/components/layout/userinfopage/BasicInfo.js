import {
  Box,
  Image,
  Heading,
  Flex,
  Spacer,
  Button,
  Text,
  Link,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";
import React, { useContext } from "react";
import { Link as RouteLink } from "react-router-dom";
import GithubContext from "../../../context/GithubContext";

const BasicInfo = () => {
  const { user, dispatch } = useContext(GithubContext);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    hireable,
  } = user;
  const appBackground = useColorModeValue("gray.200", "gray.700");
  const appColor = useColorModeValue("#000", "#fff");
  const roleTag =
    type === "User" ? (
      <Tag colorScheme="green">User</Tag>
    ) : (
      <Tag colorScheme="red">Admin</Tag>
    );
  const hireableTag = hireable ? (
    <Tag colorScheme="blue">Hireable</Tag>
  ) : (
    <Tag colorScheme="red">Unhireable</Tag>
  );

  const locationTab = location && (
    <Box
      bg={appBackground}
      color={appColor}
      p={4}
      textAlign="center"
      borderRadius={8}
      boxShadow="xl"
      w="100%"
    >
      <Text>Location:</Text>
      <Heading as="h5" size="md">
        {location}
      </Heading>
    </Box>
  );
  const websiteTab = blog && (
    <Box
      bg={appBackground}
      color={appColor}
      p={4}
      textAlign="center"
      borderRadius={8}
      boxShadow="xl"
      w="100%"
    >
      <Text>Website:</Text>
      <Heading as="h5" size="md">
        <Link
          textDecor="none"
          _hover={{ textDecoration: "none" }}
          href={`https://${blog}`}
        >
          {blog}
        </Link>
      </Heading>
    </Box>
  );
  const twitterTab = twitter_username && (
    <Box
      bg={appBackground}
      color={appColor}
      p={4}
      textAlign="center"
      borderRadius={8}
      boxShadow="xl"
      w="100%"
    >
      <Text>Twitter:</Text>
      <Heading as="h5" size="md">
        <Link
          textDecor="none"
          _hover={{ textDecoration: "none" }}
          href={`https://twitter.com/${twitter_username}`}
        >
          {twitter_username}
        </Link>
      </Heading>
    </Box>
  );
  return (
    <>
      <Box position="relative">
        <Image
          display="inline-block"
          borderRadius="full"
          boxSize={200}
          src={avatar_url}
          alt={name}
          opacity={0.45}
        />
        <Box display="inline-block" position="absolute" bottom={2} left={8}>
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Text>{login}</Text>
        </Box>
      </Box>
      <Box flexGrow={1}>
        <Flex gap={4} pb={8}>
          <Heading as="h4" size="xl">
            {name}
          </Heading>
          {roleTag}
          {hireableTag}
          <Spacer />
          <Button>
            <Text>
              <Link
                textDecor="none"
                _hover={{ textDecoration: "none" }}
                href={html_url}
              >
                Visit Github Profile
              </Link>
            </Text>
          </Button>
          <Button
            leftIcon={<FaAngleLeft />}
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            <Text>
              <RouteLink to="/">Back to search</RouteLink>
            </Text>
          </Button>
        </Flex>
        <Text pb={4}>{bio}</Text>

        <Flex gap={4} pt={4}>
          {locationTab}
          {websiteTab}
          {twitterTab}
        </Flex>
      </Box>
    </>
  );
};

export default BasicInfo;
