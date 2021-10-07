import React, { useEffect } from "react";
import NewAnecdote from "./components/NewAnecdote";
import Anecdotes from "./components/Anecdotes";
import Notification from "./components/Notification";
import Filter from "./components/filterInput";
import { initalizedAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initalizedAnecdotes());
  }, [dispatch]);

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
