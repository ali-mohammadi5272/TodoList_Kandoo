const Header = () => {
  return (
    <header className="flex items-center justify-evenly h-12  text-sm text-[gray] bg-[#fcfcfc] select-none border-b-[1px] border-b-[gray]">
      <div className="flex items-center justify-center w-full">
        <span>ID</span>
      </div>
      <div className="flex items-center justify-center w-full">
        <span>Title</span>
      </div>
      <div className="flex items-center justify-center w-full">
        <span>#</span>
      </div>
    </header>
  );
};

export default Header;
