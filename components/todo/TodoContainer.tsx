'use client';

import { TodoContext } from '@/context/TodoContext';
import { useState } from 'react';
import AddTodo from './AddTodo';
import { idText } from 'typescript';
import { v4 as uuidv4 } from 'uuid';

interface TodoContainerProps {
  children: React.ReactNode;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: 'Buy milk',
    },
    {
      id: uuidv4(),
      text: 'Buy eggs',
    },
    {
      id: uuidv4(),
      text: 'Buy bread',
    },
  ]);

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
        }}
      >
        {children}
        <AddTodo />
      </TodoContext.Provider>
    </>
  );
};

export default TodoContainer;
