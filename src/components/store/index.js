// import { legacy_createStore as createStore } from "redux";
import conterReducer from "./Counter";
import authReducer from ".//Auth";
import { configureStore } from "@reduxjs/toolkit";
// configureStore is like combine Reducers in redux

const store = configureStore({
  // configure store wants an configureObject
  // it wants one Main Reducer so don't use reducer in singular not plural

  // counter Name is important we can use it in useSelector
  reducer: { counter: conterReducer, auth: authReducer },
});

export default store;
