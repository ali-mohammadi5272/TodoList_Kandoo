import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";
import { useState } from "react";

const Table = () => {
  const todos = useSelector((state) => state.todos) || [];
  const [filteredTodos, setFilteredTodos] = useState(null);

  const searchInputChange = (e) => {
    if (e.target.value.trim()) {
      const filteredData = todos.filter((todo) =>
        todo.title.trim().includes(e.target.value.trim())
      );
      setFilteredTodos(filteredData);
    } else {
      setFilteredTodos(null);
    }
  };

  return (
    <div className="bg-slate-200 overflow-hidden rounded-lg w-full">
      <SearchInput onChange={searchInputChange} />
      <Header />
      <Main todos={filteredTodos ? filteredTodos : todos} />
      <Footer />
    </div>
  );
};

export default Table;
