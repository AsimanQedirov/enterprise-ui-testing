import React from "react";
import AddTodoItem from "./add-item";
import Lists from "./lists";

export default function Todo() {
  const [list, setLists] = React.useState<Record<string, any>[]>([]);
  return (
    <div>
      <h1>Todo List Component</h1>
      <AddTodoItem setLists={setLists} />
      <Lists list={list} />
    </div>
  );
}
