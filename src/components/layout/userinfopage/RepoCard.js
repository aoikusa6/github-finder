import {
  Box,
  Heading,
  Icon,
  Link,
  Text,
  useColorModeValue,
  Flex,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import {
  FaLink,
  FaBook,
  FaEye,
  FaStar,
  FaInfo,
  FaUtensils,
} from "react-icons/fa";
import GithubContext from "../../../context/GithubContext";

const RepoCard = ({
  url,
  description,
  watchers_count,
  stargazers_count,
  open_issues,
  forks_count,
}) => {
  const appBackground = useColorModeValue("gray.200", "gray.700");
  const appColor = useColorModeValue("#000", "#fff");
  const descriptionSection = description && (
    <Box mb={2}>
      <Icon as={FaBook} />
      <Text pl={4} display="inline">
        {description}
      </Text>
    </Box>
  );
  const watchersTag = !!watchers_count && (
    <Tag colorScheme='blue'>
      <TagLeftIcon as={FaEye}></TagLeftIcon>
      <TagLabel>{watchers_count}</TagLabel>
    </Tag>
  );
  const stargazersTag = !!stargazers_count && (
    <Tag colorScheme='yellow'>
      <TagLeftIcon as={FaStar}></TagLeftIcon>
      <TagLabel>{stargazers_count}</TagLabel>
    </Tag>
  );
  const openIssuesTag = !!open_issues && (
    <Tag colorScheme='red'>
      <TagLeftIcon as={FaInfo}></TagLeftIcon>
      <TagLabel>{open_issues}</TagLabel>
    </Tag>
  );
  const forksTag = !!forks_count && (
    <Tag colorScheme='green'>
      <TagLeftIcon as={FaUtensils}></TagLeftIcon>
      <TagLabel>{forks_count}</TagLabel>
    </Tag>
  );
  return (
    <Box
      bg={appBackground}
      color={appColor}
      borderRadius={8}
      boxShadow="xl"
      m={4}
      p={4}
    >
      <Box mb={2}>
        <Icon as={FaLink} />
        <Heading as="h4" size="md" display="inline" pl={4}>
          <Link href={url}>{url}</Link>
        </Heading>
      </Box>
      {descriptionSection}
      <Flex gap={4}>
        {watchersTag}
        {stargazersTag}
        {openIssuesTag}
        {forksTag}
      </Flex>
    </Box>
  );
};

export default RepoCard;
