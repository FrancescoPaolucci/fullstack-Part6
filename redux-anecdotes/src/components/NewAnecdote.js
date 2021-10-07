import React from "react";
import { useDispatch } from "react-redux";
import { createAnectode } from "../reducers/anecdoteReducer";
import { addNotification } from "../reducers/notificationReducer";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnectode(content));
    dispatch(addNotification(`new anecdote '${content}'`, 5));
  };

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewAnecdote;
