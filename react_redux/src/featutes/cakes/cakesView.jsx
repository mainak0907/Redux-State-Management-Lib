import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";
export const CakesView = () => {
  const [val, setVal] = useState(1);
  const num = useSelector((state) => state.cake.numofcakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes - {num}</h1>
      <button onClick={() => dispatch(ordered())}> Order Cakes</button>

      <button onClick={() => dispatch(restocked(val))}> Restock Cakes</button>
      <input
        value={val}
        onChange={(e) => {
          setVal(parseInt(e.target.value));
        }}
      ></input>
    </div>
  );
};
