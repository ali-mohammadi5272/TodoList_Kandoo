import { useState } from "react";
import FontAwesomeIcon from "../FontawesomeIcon/FontawesomeIcon";
import swal from "sweetalert";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeOne } from "./../../../Redux/stores/Todos";
import { toast } from "react-toastify";
import { todosMessages } from "../../../utils/constants";

const Row = ({ id, title, isCompleted, index }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const dispatch = useDispatch();

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

  return (
    <div
      className={`flex h-full w-full items-center justify-evenly text-sm hover:bg-slate-300 py-2 ${
        canEdit ? "bg-gray-300" : ""
      }`}
    >
      <div className=" w-2/4 text-center pt-1 pb-2 max-w-2/4 overflow-auto">
        <span className="whitespace-nowrap">{index + 1}</span>
      </div>
      <div
        className="w-full text-center pt-1 pb-2 max-w-full overflow-auto"
        contentEditable={canEdit}
      >
        <span className="whitespace-nowrap">
          {editedTodo.trim() ? editedTodo : title}
        </span>
      </div>
      <div className="flex w-full justify-center items-center">
        {canEdit && (
          <>
            <Button className="bg-red-500 hover:bg-red-600" icon="faXmark" />
            <Button
              className="bg-red-500 hover:bg-red-600 font-bold"
              text="pending"
            />
            <Button
              className="bg-green-500 hover:bg-green-600 font-bold"
              text="complete"
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
          icon="faPenToSquare"
        />
      </div>
    </div>
  );
};

export default Row;
