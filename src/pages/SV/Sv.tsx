import axios from "axios";
import React, { useEffect, useState } from "react";

const Sv = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const { data }: any = await axios.get("http://localhost:3333/data");
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const a = "foo";
  const b = "foo";
  const x = {};
  const y = {};

  console.log("sad", undefined === undefined);
  console.log(a === b);
  console.log(x === y);
  // console.log(a.prototype);
  // console.log(x.prototype);
  // console.log(x.__proto__);

  console.log(data);
  return (
    <div>
      Sv
      <span>Body of request</span>
    </div>
  );
};

export default Sv;
