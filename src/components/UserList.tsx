import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const state = useSelector((store) => store);

  console.log(state);
  return <div>UserList</div>;
};

export default UserList;
