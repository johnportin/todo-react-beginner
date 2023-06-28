'use client';

import { TodoContext } from '@/context/TodoContext';
import { useContext } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <div className="flex flex-col">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} description={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
