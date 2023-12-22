import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};

const CounterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return { counter: store.counter - Number(action.payload.num) };
  }
  console.log("Action Recieved", action);
  return store;
};

const CounterStore = createStore(CounterReducer);
export default CounterStore;
