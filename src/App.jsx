import useData from "./useData";

const App = () => {
  const {
    handleDelete,
    handleOnChange,
    handleupdate,
    inputitems,
    items,
    showitems,
  } = useData();
  return (
    <>
      <h1>TODO LIST 😃</h1>
      Name
      <input
        type="text"
        placeholder="Enter items"
        onChange={handleOnChange}
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
