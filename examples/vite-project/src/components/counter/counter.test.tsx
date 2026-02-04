import { screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Counter from "./counter";
import { render } from "../../test/utilities";

test("it should render the component", () => {
  render(<Counter />);
});

test("it should increment or decrement when the increment button is clicked", async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId("count-value");
  expect(currentCount).toHaveTextContent("0");

  const incrementButton = screen.getByRole("button", {
    name: /increment/i,
  });
  const decrementButton = screen.getByRole("button", {
    name: /decrement/i,
  });

  await user.click(incrementButton);
  await user.click(incrementButton);
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent("3");

  await user.click(decrementButton);
  expect(currentCount).toHaveTextContent("2");
});

test("it should reset to initial count when the reset button pressed", async () => {
  const { user } = render(<Counter initialCount={5} />);
  await user.click(
    screen.getByRole("button", {
      name: /reset/i,
    }),
  );
  const resultCount = screen.getByTestId("count-value");
  expect(resultCount).toHaveTextContent("5");
});
