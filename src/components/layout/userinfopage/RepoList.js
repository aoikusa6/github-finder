import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import GithubContext from "../../../context/GithubContext";
import RepoCard from "./RepoCard";
import SpinnerPage from "../SpinnerPage";

const RepoList = () => {
  const { repos, isLoading } = useContext(GithubContext);
  const reposListItem = repos.map((item) => {
    return (
      <RepoCard
        key={item.id}
        id={item.id}
        url={item.html_url}
        description={item.description}
        watchers_count={item.watchers_count}
        stargazers_count={item.stargazers_count}
        open_issues={item.open_issues}
        forks_count={item.forks_count}
      />
    );
  });

  if (!isLoading) {
    return (
      <Box pt={4}>
        <Heading as="h3" size="xl">
          Latest 10 repos:
        </Heading>
        {reposListItem}
      </Box>
    );
  } else {
    return <SpinnerPage />;
  }
};

export default RepoList;
