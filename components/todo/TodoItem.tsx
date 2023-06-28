interface TodoItemProps {
  description: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ description }) => {
  return (
    <div className="border border-gray-300 rounded-md p-2 m-2">
      {description}
    </div>
  );
};

export default TodoItem;
