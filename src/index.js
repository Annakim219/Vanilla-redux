import { act } from "@testing-library/react";
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countReducer = (count = 0, action) => {
  // count가 undifined되지 않도록 initialization
  // reducer는 나의 data를 modified하는 함수.
  // -> return하는 것은 무엇이든 application의 state가 됨.
  // action은 reducer와 소통하기 위한 방법. action은 odject여야함. string X, 무조건 type이 있어야함.

  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }

  //   if (action.type === "ADD") {
  //     return count + 1;
  //   } else if (action.type === "MINUS") {
  //     return count - 1;
  //   } else {
  //     return count;
};

const countStore = createStore(countReducer);
// store는 나의 data를 저장하는 곳.

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
// subscribe : store에 변화가 있을 때 감지해서 function을 불러옴.

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
// reducer에게 dispatch를 통해 action을 보낸다.
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
