import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  FormHelperText,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { FaGlasses, FaTrash } from "react-icons/fa";
import GithubContext from "../../../context/GithubContext";
import { searchUsers } from "../../../context/GitHubActions";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch, currentPage, usersPerPage } =
    useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserList = async () => {
      const userList = await searchUsers(
        text,
        currentPage,
        usersPerPage
      );
      dispatch({ type: "GET_USERS", payload: userList });
    };
    getUserList();
  }, [text, currentPage, usersPerPage, dispatch]);
  console.log(users);
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "FIRST_PAGE" });
    dispatch({ type: "CLEAR_REPOS" });
  };

  const isError = !text;
  const notificationMessage = !isError ? (
    <FormHelperText>Enter user you want to search</FormHelperText>
  ) : (
    <FormErrorMessage>Search field can't be empty</FormErrorMessage>
  );

  const clearButton = !!users.length && (
    <Button
      onClick={() => dispatch({ type: "CLEAR_USERS" })}
      leftIcon={<FaTrash />}
    >
      <Text display={{ base: "none", md: "initial" }}>Clear</Text>
    </Button>
  );
  return (
    <FormControl onSubmit={handleSubmit} isInvalid={isError} pb={4}>
      <FormLabel htmlFor="user">Username:</FormLabel>
      <InputGroup>
        <Input id="user" type="text" value={text} onChange={handleChange} />
        <InputRightElement
          w="fit-content"
          children={
            <Box>
              <Button
                type="submit"
                onClick={handleSubmit}
                leftIcon={<FaGlasses />}
              >
                <Text display={{ base: "none", md: "initial" }}>Search</Text>
              </Button>
              {clearButton}
            </Box>
          }
        />
      </InputGroup>
      {notificationMessage}
    </FormControl>
  );
};

export default UserSearch;
