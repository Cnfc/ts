import { Input } from "antd";
import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { makeStyles, Typography, Slider } from "@material-ui/core";
import axios from "axios";
import _ from "lodash";
import { useDebounce, useDebouncedFunction } from "../../hooks/useDebounce";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function valuetext(value: any) {
  return `${value}°C`;
}

export function valueLogging(value: any) {
  console.log(`Request processed. Value: ${value}`);
}

function Sv() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const debouncedValueLogging = useDebouncedFunction(valueLogging, 300);
  const deb = useDebounce(valueLogging, 1200);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    deb(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export default Sv;
