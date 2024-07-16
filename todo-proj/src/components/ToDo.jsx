import { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const setToDo = () => {
    setTodos((todos) => [...todos, { body: input, id: Math.random() }]);
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="ToDo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            setToDo();
          }}
        >
          SUB
        </button>
      </div>
      <div>
        <ul>
          {todos.map(({ body, id }) => (
            <li key={id}>
              <span>{body}</span>
              <button onClick={() => removeTodo(id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDo;
