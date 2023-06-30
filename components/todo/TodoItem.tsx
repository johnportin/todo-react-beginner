import { useState } from 'react';
import DeleteTodo from './DeleteTodo';
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
      {/* 
        Just set a ternary operator that checks if isEditing is true of false.
        If it's true, then render a form for editing the current description, otherwise render the
        description.
      */}
      {isEditing ? 'Editing' : description}
      <div className="flex flex-row">
        <EditTodo
          id={id}
          description={description}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
        <DeleteTodo id={id} />
      </div>
    </div>
  );
};

export default TodoItem;
