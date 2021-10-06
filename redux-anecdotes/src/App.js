import React from "react";
import NewAnecdote from "./components/NewAnecdote";
import Anecdotes from "./components/Anecdotes";
import Notification from "./components/Notification";
import Filter from "./components/filterInput";
const App = () => {
  return (
    <div>
      <Notification />
      <Filter />
      <h2>Anecdotes</h2>
      <Anecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  );
};

export default App;
