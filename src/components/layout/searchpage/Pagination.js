import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaForward,
  FaBackward,
} from "react-icons/fa";
import GithubContext from "../../../context/GithubContext";

const Pagination = () => {
  const { usersCount, currentPage, usersPerPage, dispatch } =
    useContext(GithubContext);

  const currentPageButton = !!usersCount && (
    <Button isDisabled>
      Showing page {currentPage} of {Math.ceil(usersCount / usersPerPage)}
    </Button>
  );
  return (
    <Flex pt={4}>
      <Button
        leftIcon={<FaBackward />}
        onClick={() => dispatch({ type: "FIRST_PAGE" })}
      >
        <Text display={{ base: "none", md: "initial" }}>First page</Text>
      </Button>
      <Button
        leftIcon={<FaAngleLeft />}
        onClick={
          currentPage === 1
            ? () => dispatch({ type: "FIRST_PAGE" })
            : () => dispatch({ type: "PREV_PAGE" })
        }
      >
        <Text display={{ base: "none", md: "initial" }}>Previous page</Text>
      </Button>
      <Spacer />
      {currentPageButton}
      <Spacer />
      <Button
        rightIcon={<FaAngleRight />}
        onClick={
          currentPage === Math.ceil(usersCount / usersPerPage)
            ? () => dispatch({ type: "LAST_PAGE" })
            : () => dispatch({ type: "NEXT_PAGE" })
        }
      >
        <Text display={{ base: "none", md: "initial" }}>Next page</Text>
      </Button>
      <Button
        rightIcon={<FaForward />}
        onClick={() => dispatch({ type: "LAST_PAGE" })}
      >
        <Text display={{ base: "none", md: "initial" }}>Last page</Text>
      </Button>
    </Flex>
  );
};

export default Pagination;
