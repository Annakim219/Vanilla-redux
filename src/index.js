import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countReducer = (count = 0, action) => {
  // count가 undifined되지 않도록 initialization
  // reducer는 나의 data를 modified하는 함수.
  // action은 reducer와 소통하기 위한 방법.
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countReducer);
// store는 나의 data를 저장하는 곳.

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
// subscribe : store에 변화가 있을 때 감지해서 함수를 불러옴.

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
