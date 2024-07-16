import React from "react";
import { Data } from "../App";
import { useContext } from "react";

function ComponentC() {
  const data = useContext(Data);
  return (
    <>
      <div>My name is {data} </div>
    </>
  );
}

export default ComponentC;
