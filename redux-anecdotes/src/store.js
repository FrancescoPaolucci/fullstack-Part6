import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import reducer from "./reducers/anecdoteReducer";
import Notificationreducer from "./reducers/notificationReducer";
import Filtereducer from "./reducers/filteReducer";

const Reducer = combineReducers({
  anecdote: reducer,
  notification: Notificationreducer,
  filtereducer: Filtereducer,
});
const store = createStore(Reducer, composeWithDevTools());
export default store;
