import { create } from "zustand";

export const useAppStore = create(init);

function init(set) {
  return {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    add(todo) {
      return set(function (state) {
        return { todos: [todo, ...state.todos] };
      });
    },
    removeTodo(id) {
      return set(function (state) {
        const todos = state.todos.filter((item) => item.id != id);
        return { todos };
      });
    },

    updateTodo(todo) {
      return set(function (state) {
        const todos = state.todos.map((item) => {
          if (item.id === todo.id) {
            return todo;
          } else {
            return item;
          }
        });
        return { todos };
      });
    },
    clear() {
      return set(() => ({ todos: [] }));
    },
  };
}
