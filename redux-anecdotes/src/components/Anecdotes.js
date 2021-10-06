import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer.js";
import {
  votedNotification,
  hideNotification,
} from "../reducers/notificationReducer";

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdote);
  const filter = useSelector((state) => state.filtereducer);
  const vote = (id, content) => {
    console.log("vote", id);
    dispatch(addVote(id));
    dispatch(votedNotification(content));
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  const Anecdote = ({ anecdote }) => {
    return (
      <li>
        <p> {anecdote.content}</p>
        <button onClick={() => vote(anecdote.id, anecdote.content)}>
          vote {anecdote.votes}
        </button>{" "}
      </li>
    );
  };
  return (
    <ul>
      {anecdotes
        .filter((data) => data.content.toLowerCase().indexOf(filter) !== -1)
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))}
    </ul>
  );
};

export default Anecdotes;
