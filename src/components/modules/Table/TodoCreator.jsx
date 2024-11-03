import { useState } from "react";
import { create } from "../../../Redux/stores/Todos";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { todosMessages } from "../../../utils/constants";

const TodoCreator = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((prev) => prev.todos);
  const dispatch = useDispatch();

  const inputChange = (e) => setTodo(e.target.value);

  const addTodo = () => {
    if (todo.trim()) {
      const isTodoExistBeforeInDB = !!todos.find(
        (todoItem) => todoItem.title.trim().toLowerCase() === todo.toLowerCase()
      );
      if (isTodoExistBeforeInDB) {
        toast.error(todosMessages.error.create);
        return;
      }
      toast.success(todosMessages.success.create);
      dispatch(create(todo));
    }
  };

  const clearForm = () => setTodo("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    addTodo();
    clearForm();
  };

  return (
    <form action="" className="py-4" onSubmit={submitFormHandler}>
      <div className="flex bg-slate-200 rounded-3xl hover:bg-slate-300">
        <input
          className="py-1 outline-none px-3 border-none bg-transparent w-full rounded-3xl"
          type="text"
          id="input-box"
          placeholder="add your tasks"
          value={todo}
          onChange={inputChange}
          required
        />
        <input
          className="bg-orange-500 cursor-pointer text-white font-bold text-lg rounded-3xl py-1 px-6 hover:bg-orange-600 tracking-wide disabled:bg-slate-500"
          type="submit"
          value="Add"
          disabled={!todo}
        />
      </div>
    </form>
  );
};

export default TodoCreator;
