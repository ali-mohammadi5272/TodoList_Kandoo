const SearchInput = ({ onChange }) => {
  const submitFormHandler = (e) => e.preventDefault();

  return (
    <form action="" className="py-4" onSubmit={submitFormHandler}>
      <div className="flex bg-slate-200 rounded-3xl hover:bg-slate-300">
        <input
          className="py-1 outline-none px-3 border-none bg-transparent w-full rounded-3xl"
          type="search"
          id="input-box"
          placeholder="find Todo"
          onChange={onChange}
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
