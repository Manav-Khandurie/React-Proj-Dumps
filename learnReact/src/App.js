import useFetch from "./hooks/useFetch";
const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>{data && data.map((data) => <li key={data.id}> {data.title}</li>)}</>
  );
};

export default App;

/*
Part-1)
const numbers=[1,2,3,4,5];
  const myName="Manav";
  const multiply=(a,b)=>a*b;
  const specialclass="mkclass";
  return (<>
    <Add />
    <Greeting />
    <h1>{myName}</h1>
    <p>2+2={2*2}</p>
    <p> My frined :{["Alex","John"]}</p>
    <p> {multiply(2,2)}</p>
    <p className={specialclass}> Manav</p>
    {numbers.map((number)=>(
      <ul key={Math.random()}>
        <li>
          {number}  
        </li>
      </ul>

    ))}
  </>);
  */

/*

  const ValidPassword = () => <h1>Valid</h1>;
const InvalidPassword = () => <h1>InValid</h1>;

const Password = ({ isValid }) => {
  if (isValid) return <ValidPassword />;
  return <InvalidPassword />;
};

const App = () => {
  return (
    <>
      <Password isValid={false} />
    </>
  );
};

export default App;
*/

/*

    <>
      <FaCartArrowDown />
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
    </>
*/

/*

var a = 1;
const Button = () => {
  const handleClick = () => {
    console.log(a++);
  };
  return (
    <button
      onClick={() => {
        handleClick();
      }}
    >
      Click
    </button>
  );
};
function TypesExample() {
  return <Button />;
}

const Cart = () => {
  const prods = ["pod1", "Pod2", "pod3"];

  return (
    <>
      <TypesExample />
      <h1> Cart</h1>
      {prods.length}
      <ul>
        <h2> Products </h2>
        {prods.map((item) => (
          <li key={Math.random()}> {item} </li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  return (
    <>
      <Button />
    </>
  );
};

export default App;
*/
/*

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = (count) => {
    setCount(++count);
  };

  const handleDec = (count) => {
    setCount(--count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => handleInc(count)}>+</button>
      <button onClick={() => handleDec(count)}>-</button>
    </>
  );
};

*/
/*

import { useState } from "react";

const Counter = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Deadpool 3",
      rating: 8,
    },
    {
      id: 2,
      title: "Godzilla x Kong",
      rating: 8,
    },
  ]);

  const updateMovies = () => {
    setMovies(
      movies.map((movie) => (movie.id === 1 ? { ...movie, rating: 9 } : movie))
    );
  };
  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()}>
          {" "}
          {movie.title} , {movie.rating}
        </li>
      ))}
      <button onClick={() => updateMovies()}>Update</button>
    </>
  );
};

*/

/*

import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered ${username}`);
    setUsername("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={username} type="text" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
};

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

*/

/*

import { useEffect, useState } from "react";

const Form = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 10) console.log("Exceeded");
    else if (value > 0) console.log(value);
    console.log("Effect triggered");
  }, [value]); // Dependency array makes sure the useEffect is execulted whne the value changes if its [] its runs at Mount only

  const handleClick = (val) => {
    setValue(val);
  };
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => handleClick(value + 1)}>Click</button>
    </>
  );
};

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default App;


*/

/*

import { useEffect, useState } from "react";

const Form = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const rdata = await response.json();
      setData(rdata);
    }
    getData();
  }, []); // Dependency array makes sure the useEffect is execulted whne the value changes if its [] its runs at Mount only

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

*/
/*

import ComponentC from "./components/componentC";
//S-1) Import Context
import { createContext } from "react";

//S-2) Create instance of context and excport
export const Data = createContext();

const App = () => {
  const name = "Manav";
  return (
    <>
      <Data.Provider value={name}>
        <ComponentC />
      </Data.Provider>
    </>
  );
};

export default App;

import React from "react";
import { Data } from "../App";

function ComponentC() {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return <div>My name is {name}</div>;
        }}
      </Data.Consumer>
    </>
  );
}

export default ComponentC;


//Context API
*/
/*
Use ref
import { useRef } from "react";
const App = () => {
  const inputElement = useRef(null);

  const handleSubmit = () => {
    inputElement.current.focus();
    console.log(inputElement);
    inputElement.current.value = "Manav";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => handleSubmit()}>Submit</button>
    </>
  );
};

export default App;
//Use ref
*/
/*
CustomHook setup
import { useState, useRef, useEffect } from "react";
const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((r) => r.json())
      .then((d) => setData(d));
  }, []);
  return (
    <>{data && data.map((data) => <li key={data.id}> {data.title}</li>)}</>
  );
};

export default App;

*/
/*
Customhook
import useFetch from "./hooks/useFetch";
const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>{data && data.map((data) => <li key={data.id}> {data.title}</li>)}</>
  );
};

export default App;

*/
