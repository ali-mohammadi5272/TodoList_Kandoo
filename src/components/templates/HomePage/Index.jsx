import { useLayoutEffect } from "react";
import TodoList from "../../modules/TodoList/TodoList";

const HomePage = () => {
  useLayoutEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main>
      <h1 className="text-5xl font-bold my-5 text-center">Home</h1>
      <section>
        <TodoList />
      </section>
    </main>
  );
};

export default HomePage;
