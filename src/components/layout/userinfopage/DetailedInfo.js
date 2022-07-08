import React, { useContext } from "react";
import {
  Box,
  Icon,
  Heading,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import GithubContext from "../../../context/GithubContext";
import { useParams } from "react-router";
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from "react-icons/fa";
import { getRepos } from "../../../context/GitHubActions";

const DetailedInfo = () => {
  const { user, dispatch } = useContext(GithubContext);
  const params = useParams();
  const { followers, following, public_repos, public_gists } = user;
  const appBackground = useColorModeValue("gray.200", "gray.700");
  const appColor = useColorModeValue("#000", "#fff");
  return (
    <>
      <Flex pt={4} gap={4}>
        <Box
          bg={appBackground}
          color={appColor}
          p={8}
          borderRadius={8}
          boxShadow="xl"
          w="100%"
        >
          <Flex alignItems="center">
            <Box>
              <Text>Followers:</Text>
              <Heading as="h5" size="md">
                {followers}
              </Heading>
            </Box>
            <Spacer />
            <Icon color="pink.500" boxSize={12} as={FaUsers}></Icon>
          </Flex>
        </Box>
        <Box
          bg={appBackground}
          color={appColor}
          p={8}
          borderRadius={8}
          boxShadow="xl"
          w="100%"
        >
          <Flex alignItems="center">
            <Box>
              <Text>Following:</Text>
              <Heading as="h5" size="md">
                {following}
              </Heading>
            </Box>
            <Spacer />
            <Icon color="pink.500" boxSize={12} as={FaUserFriends}></Icon>
          </Flex>
        </Box>
        <Box
          bg={appBackground}
          color={appColor}
          p={8}
          borderRadius={8}
          boxShadow="xl"
          w="100%"
        >
          <Flex alignItems="center">
            <Box
              onClick={async () => {
                dispatch({ type: "SET_LOADING" });
                const userRepos = await getRepos(params.username);
                dispatch({ type: "GET_REPOS", payload: userRepos });
              }}
            >
              <Text>Public Repos:</Text>
              <Heading as="h5" size="md">
                {public_repos}
              </Heading>
            </Box>
            <Spacer />
            <Icon color="pink.500" boxSize={12} as={FaCodepen}></Icon>
          </Flex>
        </Box>
        <Box
          bg={appBackground}
          color={appColor}
          p={8}
          borderRadius={8}
          boxShadow="xl"
          w="100%"
        >
          <Flex alignItems="center">
            <Box>
              <Text>Public Gists:</Text>
              <Heading as="h5" size="md">
                {public_gists}
              </Heading>
            </Box>
            <Spacer />
            <Icon color="pink.500" boxSize={12} as={FaStore}></Icon>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default DetailedInfo;
