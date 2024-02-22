import React, { useState } from "react";

const useData = (inputitems, setinputitems, items, setitems) => {
  const showitems = () => {
    setitems([...items, inputitems]);
    setinputitems("");
  };
  const handleDelete = (index) => {
    const update = items.filter((elem, id) => {
      return id !== index;
    });
    setitems(update);
  };
  const handleupdate = (index, currval) => {
    const newvalue = prompt("Enter new value", currval);
    if (newvalue !== null) {
      const update = [...items];
      update[index] = newvalue;
      setitems(update);
    }
  };
  return inputitems, showitems, handleDelete, handleupdate, items;
};

export default useData;
