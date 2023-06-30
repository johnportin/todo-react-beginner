import { HiTrash } from 'react-icons/hi';
import { useToast } from '../ui/use-toast';
import { TodoContext } from '@/context/TodoContext';
import { useContext } from 'react';

interface DeleteTodoButtonProps {
  id: string;
}

const DeleteTodoButton: React.FC<DeleteTodoButtonProps> = ({ id }) => {
  const { toast } = useToast();
  const { todos, setTodos } = useContext(TodoContext);
  const DeleteTodoButton = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    toast({
      title: 'Todo deleted',
      description: `
        You deleted ${todos.find((todo) => todo.id === id)?.text}
      `,
    });
  };
  return (
    <div className="hover:bg-slate-200" onClick={DeleteTodoButton}>
      <HiTrash size={24} />
    </div>
  );
};

export default DeleteTodoButton;
