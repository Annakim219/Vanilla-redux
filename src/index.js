import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countReducer = (count = 0, action) => {
  // count가 undifined되지 않도록 initialization
  // reducer는 나의 data를 modified하는 함수.
  // action은 reducer와 소통하기 위한 방법.
  console.log(count, action);
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

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });

// dispatch는 action을 실행하기 위한 메세지를 보내는 것.
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };
// const handleMinus = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
