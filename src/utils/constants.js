const themes = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

const dbDefaultTables = {
  todos: [],
};

const todosMessages = {
  success: {
    create: "Todo created successfully",
    update: "Todo updated successfully",
    remove: "Todo removed successfully",
  },
  error: {
    create: "Create Todo failed. Todo already exists !!",
    update: "Update Todo failed !!",
    updateTodoEmpty: "Todo can not be empty !!",
    remove: "Remove Todo successfully !!",
  },
};

export { themes, dbDefaultTables, todosMessages };
