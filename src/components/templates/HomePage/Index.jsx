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
        <section>
          <TodoList />
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
