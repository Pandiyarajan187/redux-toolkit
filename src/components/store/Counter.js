import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
      // it looks like mutate the original state but it doesn't
      //reduc toolkit internally create new object
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "increase":
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case "toggle":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);
