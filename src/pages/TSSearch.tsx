import React from "react";

interface IFooBar {
  foo: number;
  bar: string;
}

const fooBars: Array<IFooBar> = [
  {
    foo: 2,
    bar: "bar1",
  },
  {
    foo: 4,
    bar: "bar2",
  },
  {
    foo: 5,
    bar: "bar3",
  },
];

const sortByFoo = (fooBars: any) => {
  const me: any = [];
  fooBars.map((i: any) => {
    me.push(i.foo);
  });
  return me;
};

const TSSearch = () => {
  function sortByKey<T>(data: Array<T>, key: keyof T) {
    data.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  }
  const me = sortByKey<IFooBar>(fooBars, "foo");

  console.log(me);

  return (
    <div>
      TSSearch
      <span>TSSearch</span>
    </div>
  );
};

export default TSSearch;
