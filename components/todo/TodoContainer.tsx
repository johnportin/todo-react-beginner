'use client';

import { TodoContext } from '@/context/TodoContext';
import { useState } from 'react';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';
import FilterTodos from './FilterTodos';

interface TodoContainerProps {
  children: React.ReactNode;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: 'Buy milk',
      isComplete: false,
      isVisible: true,
    },
    {
      id: uuidv4(),
      text: 'Buy eggs',
      isComplete: false,
      isVisible: true,
    },
    {
      id: uuidv4(),
      text: 'Buy bread',
      isComplete: false,
      isVisible: true,
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
        <FilterTodos />
      </TodoContext.Provider>
    </>
  );
};

export default TodoContainer;
