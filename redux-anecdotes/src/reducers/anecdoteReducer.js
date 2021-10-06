const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const id = action.data.id;
      const addVoteTo = state.find((n) => n.id === id);
      const addedVote = { ...addVoteTo, votes: addVoteTo.votes + 1 };
      return state.map((voted) => (voted.id !== id ? voted : addedVote));
    case "ADD_ANECDOTE":
      return [...state, action.data];
    default:
      return state;
  }
};

export const addVote = (id) => {
  return {
    type: "ADD_LIKE",
    data: { id },
  };
};

export const createAnectode = (content) => {
  return {
    type: "ADD_ANECDOTE",
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  };
};

export default reducer;
