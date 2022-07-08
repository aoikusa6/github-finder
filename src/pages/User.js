import React, { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { useParams } from "react-router";
import SpinnerPage from "../components/layout/SpinnerPage";
import { Box, Flex } from "@chakra-ui/react";
import { getUser } from "../context/GitHubActions";
import BasicInfo from "../components/layout/userinfopage/BasicInfo";
import DetailedInfo from "../components/layout/userinfopage/DetailedInfo";
import RepoList from "../components/layout/userinfopage/RepoList";

const User = () => {
  const { dispatch, isLoading, repos } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getSingleUser = async () => {
      const singleUser = await getUser(params.username);
      dispatch({ type: "GET_USER", payload: singleUser });
    };
    getSingleUser();
  }, [dispatch, params.username]);

  if (!isLoading) {
    return (
      <Box>
        <Flex gap={4}>
          <BasicInfo />
        </Flex>
        {repos.length ? <RepoList /> : <DetailedInfo />}
      </Box>
    );
  } else {
    return <SpinnerPage />;
  }
};

export default User;
