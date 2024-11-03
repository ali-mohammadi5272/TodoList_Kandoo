import Row from "./Row";

const Main = ({ todos }) => {
  return (
    <div className="table-main">
      {todos && todos.length > 0 ? (
        todos?.map((todo, index) => (
          <Row
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            index={index}
          />
        ))
      ) : (
        <p className="text-center py-1">No Content</p>
      )}
    </div>
  );
};

export default Main;
