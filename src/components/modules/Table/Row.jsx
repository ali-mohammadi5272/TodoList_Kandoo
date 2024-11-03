import { useState } from "react";
import FontAwesomeIcon from "../FontawesomeIcon/FontawesomeIcon";
import swal from "sweetalert";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { removeOne, updateTodo } from "./../../../Redux/stores/Todos";
import { toast } from "react-toastify";
import { todosMessages } from "../../../utils/constants";

const Row = ({ id, title, isCompleted, index }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const [todoStatus, setTodoStatus] = useState(isCompleted);
  const dispatch = useDispatch();
  const todos = useSelector((prev) => prev.todos);

  const todoTitleChange = (e) => {
    setEditedTodo(e.target.textContent);
  };
  const editBtnHandler = () => {
    setCanEdit(true);
  };
  const removeTodoHandler = async () => {
    const result = await swal({
      title: "Remove Todo",
      icon: "warning",
      text: `Remove ${title} ?`,
      buttons: ["No", "Yes"],
    });
    setEditedTodo("");
    if (result) {
      dispatch(removeOne(id));
      toast.success(todosMessages.success.remove);
    }
  };
  const changeTodoCompleteStatus = (isTodoComplete) => {
    setTodoStatus(isTodoComplete);
  };
  const cancelEditHandler = async () => {
    setEditedTodo("");
    setTodoStatus(isCompleted);
    setCanEdit(false);
  };
  const saveChangesHandler = async () => {
    const isTitleChanged = editedTodo.trim() !== title;
    const isStatusChanged = todoStatus !== isCompleted;
    const isTodoChanged = isTitleChanged || isStatusChanged;

    if (canEdit && isTodoChanged) {
      const result = await swal({
        title: "Update Todo",
        icon: "warning",
        text: "Save Changes ?",
        buttons: ["No", "Yes"],
      });

      if (!result) return;

      if (isTitleChanged) {
        const isTodoExistBeforeInDB = !!todos.find(
          (todoItem) =>
            todoItem.title.trim().toLowerCase() === editedTodo.toLowerCase()
        );
        if (isTodoExistBeforeInDB) {
          toast.error(todosMessages.error.update);
          return;
        }
      }
      toast.success(todosMessages.success.update);
      dispatch(
        updateTodo({
          id,
          title: editedTodo.trim() ? editedTodo.trim() : title,
          isCompleted: todoStatus !== isCompleted ? todoStatus : isCompleted,
        })
      );
      setEditedTodo("");
      setCanEdit(false);
    }
  };

  return (
    <div
      className={`flex h-full w-full items-center justify-evenly text-sm hover:bg-slate-300 py-2 ${
        canEdit ? "bg-gray-300" : ""
      }`}
    >
      <div
        className={`w-2/4 text-center pt-1 pb-2 max-w-2/4 overflow-auto ${
          todoStatus ? "line-through" : ""
        }`}
      >
        <span className="whitespace-nowrap">{index + 1}</span>
      </div>
      <div
        className={`w-full text-center pt-1 pb-2 max-w-full overflow-auto ${
          todoStatus ? "line-through" : ""
        }`}
        contentEditable={canEdit}
        onInput={todoTitleChange}
      >
        <span className="whitespace-nowrap">
          {editedTodo.trim() ? editedTodo : title}
        </span>
      </div>
      <div className="flex w-full justify-center items-center">
        {canEdit && (
          <>
            <Button
              className={`hover:bg-red-600 font-bold ${
                !todoStatus
                  ? "bg-red-500 text-white"
                  : "text-gray-600 hover:text-white"
              }`}
              onClick={() => changeTodoCompleteStatus(false)}
              text="pending"
            />
            <Button
              className={`hover:bg-green-600 font-bold ${
                todoStatus
                  ? "bg-green-500 text-white"
                  : "text-gray-600 hover:text-white"
              }`}
              onClick={() => changeTodoCompleteStatus(true)}
              text="done"
            />
          </>
        )}
        {!canEdit && (
          <span
            className={`inline-block scale-150 ${
              isCompleted ? "text-green-500 " : "text-red-500"
            }`}
          >
            <FontAwesomeIcon
              icon={isCompleted ? "faCircleCheck" : "faCircleXmark"}
            />
          </span>
        )}
      </div>
      <div className="flex w-full justify-center items-center">
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={removeTodoHandler}
          icon="faTrashCan"
        />
        <Button
          className="bg-[#008f8fcc] hover:bg-[#007272cc]"
          onClick={editBtnHandler}
          icon="faPenToSquare"
        />
        {canEdit && (
          <Button
            className="bg-black hover:bg-gray-700 font-bold"
            onClick={cancelEditHandler}
            text="cancel"
          />
        )}
        {canEdit && (
          <Button
            className="bg-green-600 hover:bg-green-700 font-bold"
            onClick={saveChangesHandler}
            text="save"
          />
        )}
      </div>
    </div>
  );
};

export default Row;
