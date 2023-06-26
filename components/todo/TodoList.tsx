'use client';

import { TodoContext } from '@/context/TodoContext';
import { useContext } from 'react';

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <div className="flex flex-col">
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
};

export default TodoList;
