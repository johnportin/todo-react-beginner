import { useState } from 'react';
import DeleteTodoButton from './DeleteTodoButton';
import EditTodoButton from './EditTodoButton';
import EditTodo from './EditTodo';

interface TodoItemProps {
  id: string;
  description: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description }) => {
  const [isEditing, setIsEditing] = useState(false);

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
        description
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
