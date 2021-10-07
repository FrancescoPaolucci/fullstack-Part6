import React from "react";
//import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createAnectode } from "../reducers/anecdoteReducer";
import { addNotification } from "../reducers/notificationReducer";

const NewAnecdote = (props) => {
  // const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnectode(content);
    props.addNotification(`new anecdote '${content}'`, 5);
  };

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  );
};

/*const mapDispatchToprops {
addNotification
}*/

export default connect(null, { createAnectode, addNotification })(NewAnecdote);
