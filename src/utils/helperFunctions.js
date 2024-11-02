const getLocalStorageData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

const setLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const createTodo = (title) => {
  const todo = {
    id: crypto.randomUUID() + Date.now(),
    title,
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return todo;
};

export { getLocalStorageData, setLocalStorageData, createTodo };
