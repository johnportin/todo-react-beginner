import DeleteTodo from './DeleteTodo';

interface TodoItemProps {
  id: string;
  description: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description }) => {
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
      {description}
      <DeleteTodo id={id} />
    </div>
  );
};

export default TodoItem;
