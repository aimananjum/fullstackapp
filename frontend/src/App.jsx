import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div className="card" key={joke.id}>
          <div className="container">
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
