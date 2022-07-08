import React from "react";
import Pagination from "../components/layout/searchpage/Pagination";
import UserList from "../components/layout/searchpage/UserList";
import UserSearch from "../components/layout/searchpage/UserSearch";

const Home = () => {
  return (
    <>
      <UserSearch />
      <UserList />
      <Pagination />
    </>
  );
};

export default Home;
