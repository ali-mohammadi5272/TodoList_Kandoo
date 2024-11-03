import { useLayoutEffect } from "react";
import Container from "../../modules/Container/Container";
import TodoList from "../../modules/TodoList/TodoList";

const HomePage = () => {
  useLayoutEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main>
      <Container>
        <h1 className="text-5xl font-bold my-5 text-center">Home</h1>
        <section>
          <TodoList />
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
