import React from "react";

export default function Counter({
  initialCount = 0,
}: {
  initialCount?: number;
}) {
  const [count, setCount] = React.useState(initialCount);
  return (
    <div>
      <h2>Counter Component</h2>
      <p>This is a simple counter component.</p>
      <button name="increment-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <span data-testid="count-value">{count}</span>
      <button name="decrement-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button name="reset" onClick={() => setCount(initialCount)}>
        Reset Button
      </button>
    </div>
  );
}
