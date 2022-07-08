import { Grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import UserCard from "./UserCard";
import GithubContext from "../../../context/GithubContext";
import SpinnerPage from "../SpinnerPage";
const UserList = () => {
  const { users, isLoading } = useContext(GithubContext);

  const usersGridItem = users.map((item) => {
    return (
      <UserCard
        key={item.id}
        id={item.id}
        username={item.login}
        photo={item.avatar_url}
      />
    );
  });

  if (!isLoading) {
    return (
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={4}
      >
        {usersGridItem}
      </Grid>
    );
  } else {
    return <SpinnerPage />;
  }
};

export default UserList;
