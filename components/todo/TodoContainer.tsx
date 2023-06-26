'use client';

import { TodoContext } from '@/context/TodoContext';
import { useState } from 'react';

interface TodoContainerProps {
  children: React.ReactNode;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ children }) => {
  const [todos, setTodos] = useState(['todo1', 'todo2', 'todo3']);

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoContainer;
