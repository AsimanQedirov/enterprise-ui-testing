import React from "react";

interface Props {
  setLists: Function;
}

const AddTodoItem = (props: Props) => {
  const [value, setValue] = React.useState("");

  const addNewItem = () => {
    if (value.trim() === "") return;
    props.setLists((prev: string[]) => [
      ...prev,
      {
        id: prev.length + 1,
        name: value,
      },
    ]);
    setValue("");
  };

  return (
    <div>
      <label htmlFor="add-todo-input">Add todo item...</label>
      <input
        id="add-todo-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add todo item..."
        name="item-field"
      />
      <button
        name="add-item-button"
        disabled={!value.trim()}
        onClick={addNewItem}
      >
        Add Item
      </button>
    </div>
  );
};

export default AddTodoItem;
