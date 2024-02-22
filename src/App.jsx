import React from "react";
import { useState } from "react";
import useData from "./useData";

const App = () => {
  const [inputitems, setinputitems] = useState("");
  const [items, setitems] = useState([]);
  const { showitems, handleDelete, handleupdate } = useData(
    inputitems,
    setinputitems,
    items,
    setitems
  );
  const inputvalue = (e) => {
    setinputitems(e.target.value);
  };
  return (
    <>
      <h1>TODO LIST 😃</h1>
      Name
      <input
        type="text"
        placeholder="Enter items"
        onChange={inputvalue}
        value={inputitems}
      />
      <button onClick={showitems}>+</button>
      <ul>
        {items?.map((itemvalue, index) => {
          return (
            <li key={index}>
              {itemvalue} <button onClick={() => handleDelete(index)}>-</button>
              <button onClick={() => handleupdate(index, itemvalue)}>
                update
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
