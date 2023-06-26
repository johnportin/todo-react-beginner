import { createContext } from 'react';

type TodoContextType = {
  todos: string[];
  setTodos: (todos: string[]) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});
