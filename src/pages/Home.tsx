import React, { useEffect, useState } from "react";
import { Button } from "antd";

const Component = () => {
  let variable = 5;

  setTimeout(() => {
    variable = variable + 3;
  }, 100);

  return <div>{variable}</div>;
};

const Home = () => {
  return (
    <div>
      <span>Home Page</span>
      <Component />
    </div>
  );
};

export default Home;
