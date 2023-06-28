import { createContext } from 'react';

type todo = {
  id: string;
  text: string;
};

type TodoContextType = {
  todos: todo[];
  setTodos: (todos: todo[]) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});
