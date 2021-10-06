import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer.js";

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const vote = (id) => {
    console.log("vote", id);
    dispatch(addVote(id));
  };
  const Anecdote = ({ anecdote }) => {
    return (
      <li>
        <p> {anecdote.content}</p>
        <button onClick={() => vote(anecdote.id)}>
          vote {anecdote.votes}
        </button>{" "}
      </li>
    );
  };
  return (
    <ul>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))}
    </ul>
  );
};

export default Anecdotes;
