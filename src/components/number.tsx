import React from "react";
import "./style.css";

export const Number = ({ number }: { number: string }) => {
  const checkedNumbers: string[] = [
    "7",
    "21",
    "23",
    "25",
    "29",
    "32",
    "35",
    "37",
    "38",
    "40",
    "47",
    "53",
    "66",
    "68",
    "70",
    "74",
    "75",
    "76",
    "77",
    "80",
  ];
  const className = checkedNumbers.includes(number)
    ? "checked-number"
    : "number";
  return <div className={className}>{number}</div>;
};
