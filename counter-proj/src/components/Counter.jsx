import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const reset = () => setValue(0);

  return (
    <div>
      <div className="counter">{value}</div>
      <section>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        <button onClick={reset}> 0 </button>
      </section>
    </div>
  );
}

export default Counter;
