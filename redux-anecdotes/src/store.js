import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/anecdoteReducer";
import Notificationreducer from "./reducers/notificationReducer";
import Filtereducer from "./reducers/filteReducer";
import { initalizedAnecdotes } from "./reducers/anecdoteReducer";
import anecdoteService from "./services/anecdoteServices";

const Reducer = combineReducers({
  anecdote: reducer,
  notification: Notificationreducer,
  filtereducer: Filtereducer,
});

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

anecdoteService
  .getAll()
  .then((anecdotes) => store.dispatch(initalizedAnecdotes(anecdotes)));
export default store;
