import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer.js";
import { votedNotification } from "../reducers/notificationReducer";

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdote);
  const Filter = useSelector((state) => state.filtereducer);
  const vote = async (anecdote) => {
    console.log("vote", anecdote.id);
    dispatch(addVote(anecdote));
    dispatch(votedNotification(`you voted '${anecdote.content}'`, 5));
  };

  const Anecdote = ({ anecdote }) => {
    return (
      <li>
        <p> {anecdote.content}</p>
        <button onClick={() => vote(anecdote)}>
          vote {anecdote.votes}
        </button>{" "}
      </li>
    );
  };
  return (
    <ul>
      {anecdotes
        .filter((data) => data.content.toLowerCase().indexOf(Filter) !== -1)
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))}
    </ul>
  );
};

export default Anecdotes;
