import { useState } from "react";
import TodoItems from "./TodoItems";
import { useSelector, useDispatch } from "react-redux";
import addTodo from "../features/TodoAddSlice";
export default function Todo() {
  const [todo, setTodo] = useState("");
  let todos = useSelector((state) => state.todo.value);
  console.log(todos);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    let newTodo = { todo:" first todo", iscompleted:false };
    console.log(newTodo);
    dispatch(addTodo(newTodo));
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input">
        <input
          type="text"
          className="input"
          placeholder="Add New Task"
          value={todo}
          onChange={(event) => handleChange(event)}
        />
        <button>Add</button>
      </form>
      <TodoItems />
    </div>
  );
}
