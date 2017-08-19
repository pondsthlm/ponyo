import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = Object.assign({}, state, {
        count: state.count + action.payload
      });
      break;
    case "SUBTRACT":
      break;
    default:
  }

  return state;
};

const store = createStore(reducer, { count: 1 });

store.subscribe(() => {
  console.log("store updated", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10
});

/*
import foo from "./foo.js";
import { combineReducers } from "redux";

function x() {
  return Promise.resolve(5);
}

async function y() {
  await x();
}

export default function () {
  combineReducers({});
  y().then(() => console.log(foo));
}
*/
