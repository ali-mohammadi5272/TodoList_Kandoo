const TodoCreator = () => {
  return (
    <form action="" className="py-4">
      <div className="flex bg-slate-200 rounded-3xl overflow-hidden hover:bg-slate-300">
        <input
          className="py-1 outline-none px-3 border-none bg-transparent w-full"
          type="text"
          id="input-box"
          placeholder="add your tasks"
        />
        <input
          className="bg-orange-500 cursor-pointer text-white font-bold text-lg rounded-3xl py-1 px-6 hover:bg-orange-600 tracking-wide"
          type="submit"
          value="Add"
        />
      </div>
    </form>
  );
};

export default TodoCreator;
