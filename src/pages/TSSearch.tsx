import React, { useEffect, useState } from "react";
import RevealAnimate from "components/RevealAnimate";
import genericSearch from "utils/genericSearch";
import SearchInput from "components/SearchInput";

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

  const [one, setOne] = useState(0);

  console.log(one);

  useEffect(() => {
    setOne((v) => v + 1);
  }, []);

  const widgets = [
    { title: "Vasy", description: "1th", order: 3 },
    { title: "Pety", description: "2th", order: 1 },
    { title: "Stas", description: "3th", order: 2 },
  ];

  const [query, setQuery] = useState<string>("");

  return (
    <div>
      TSSearch
      <span>TSSearch</span>
      <div>
        <RevealAnimate text="buttonnnn" />
        <SearchInput
          setSearchQuery={(query) => {
            console.log("Aim");

            setQuery(query);
          }}
        />
        {widgets
          .filter((widget) => genericSearch(widget, ["order", "title"], query, true))
          .map((widget) => (
            <h3>{widget.title}</h3>
          ))}
      </div>
    </div>
  );
};

export default TSSearch;
