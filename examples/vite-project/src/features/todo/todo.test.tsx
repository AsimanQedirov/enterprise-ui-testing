import { describe, expect, test, vitest } from "vitest";
import { render } from "../../test/utilities";
import Todo from "./todo";
import AddTodoItem from "./add-item";
import Lists from "./lists";
import { screen } from "@testing-library/react";
describe("Todo Component test", () => {
  test("Todo component smoke test", () => {
    render(<Todo />);
  });

  test("Todo component has title", () => {
    const { getByText } = render(<Todo />);
    expect(getByText("Todo List Component")).toBeInTheDocument();
  });
});

describe("Todo add item component test", () => {
  const defaultProps = {
    setLists: vitest.fn(),
  };
  test("Add new item component rendered", () => {
    render(<AddTodoItem setLists={defaultProps.setLists} />);
  });

  test("Input field is exist", () => {
    const { getByLabelText, getByRole, getByPlaceholderText } = render(
      <AddTodoItem setLists={defaultProps.setLists} />,
    );
    expect(getByPlaceholderText("Add todo item...")).toBeInTheDocument();
    expect(
      getByRole("textbox", { name: /add todo item.../i }),
    ).toBeInTheDocument();
    expect(getByLabelText("Add todo item...")).toBeInTheDocument();
  });

  test("Add new item button is exist", () => {
    const { getByRole } = render(
      <AddTodoItem setLists={defaultProps.setLists} />,
    );
    expect(getByRole("button", { name: /add item/i })).toBeInTheDocument();
  });

  test("Add new item button is disabled when input field is empty", () => {
    const { getByRole } = render(
      <AddTodoItem setLists={defaultProps.setLists} />,
    );
    const newItemField = getByRole("textbox", { name: /add todo item.../i });
    const addItemButton = getByRole("button", { name: /add item/i });

    expect(newItemField).toHaveValue("");
    expect(addItemButton).toBeDisabled();
  });

  test("Add new item button is not disabled when input field is not empty", async () => {
    const { getByRole, user } = render(
      <AddTodoItem setLists={defaultProps.setLists} />,
    );
    const newItemField = getByRole("textbox", { name: /add todo item.../i });
    const addItemButton = getByRole("button", { name: /add item/i });

    await user.type(newItemField, "New Todo Item");
    expect(newItemField).toHaveValue("New Todo Item");
    expect(addItemButton).toBeEnabled();
  });
});

describe("Todo list component test", () => {
  test("List component rendered without crashing", () => {
    render(<Lists list={[]} />);
  });

  test("List component rendered when new item added", async () => {
    const { getByRole, user } = render(<Todo />);
    const addItemButton = getByRole("button", { name: /add item/i });
    const newItemField = getByRole("textbox", { name: /add todo item.../i });
    await user.type(newItemField, "New Todo Item");
    await user.click(addItemButton);
    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });
});
