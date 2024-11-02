import Container from "../../modules/Container/Container";
import TodoList from "../../modules/Table/TodoList";

const HomePage = () => {
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
