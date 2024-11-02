const Header = () => {
  return (
    <header className="flex items-center justify-evenly h-12  text-sm text-gray-700 bg-slate-100 select-none border-b-[1px] border-b-[gray]">
      <div className="flex font-bold text-lg items-center justify-center w-2/4">
        <span>#</span>
      </div>
      <div className="flex font-bold text-lg items-center justify-center w-full">
        <span>Title</span>
      </div>
      <div className="flex font-bold text-lg items-center justify-center w-full">
        <span>Done</span>
      </div>
      <div className="flex font-bold text-lg items-center justify-center w-full">
        <span>Delete/Edit</span>
      </div>
    </header>
  );
};

export default Header;
