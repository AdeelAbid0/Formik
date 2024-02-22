import { useState } from "react";

const useData = () => {
  const [inputitems, setinputitems] = useState("");
  const [items, setitems] = useState([]);
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

  const handleOnChange = (e) => {
    setinputitems(e.target.value);
  };
  return {
    inputitems,
    items,
    showitems,
    handleDelete,
    handleupdate,
    handleOnChange,
  };
};

export default useData;
