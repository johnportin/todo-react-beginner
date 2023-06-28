import { HiTrash } from 'react-icons/hi';
import { useToast } from '../ui/use-toast';
import { TodoContext } from '@/context/TodoContext';
import { useContext } from 'react';

interface DeleteTodoProps {
  id: string;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({ id }) => {
  const { toast } = useToast();
  const { todos, setTodos } = useContext(TodoContext);
  const deleteTodo = () => {
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
    <div className="hover:bg-slate-200" onClick={deleteTodo}>
      <HiTrash />
    </div>
  );
};

export default DeleteTodo;
