import { useContext, useRef, useState } from 'react';
import DeleteTodoButton from './DeleteTodoButton';
import EditTodoButton from './EditTodoButton';
import EditTodo from './EditTodo';
import { TodoContext } from '@/context/TodoContext';

interface TodoItemProps {
  id: string;
  description: string;
  isComplete: boolean;
  isVisible: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description, isComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { todos, setTodos } = useContext(TodoContext);

  const handleClickTodo = () => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div
      className="
      flex
      flex-row
      justify-between
      border
      border-gray-300
      rounded-md
      p-2
      m-2
    "
    >
      {isEditing ? (
        <EditTodo
          id={id}
          description={description}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
      ) : (
        <div className="cursor-pointer">
          <div
            className={isComplete ? 'line-through' : ''}
            onClick={handleClickTodo}
          >
            {description}
          </div>
        </div>
      )}
      <div className="flex flex-row gap-2">
        <EditTodoButton
          id={id}
          description={description}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
        <DeleteTodoButton id={id} />
      </div>
    </div>
  );
};

export default TodoItem;
