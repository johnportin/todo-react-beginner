import { HiPencil } from 'react-icons/hi';
import { useToast } from '../ui/use-toast';

interface EditTodoProps {
  id: string;
  description: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}

const EditTodo: React.FC<EditTodoProps> = ({
  id,
  description,
  isEditing,
  setIsEditing,
}) => {
  const { toast } = useToast();

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div onClick={handleClick}>
      <HiPencil />
    </div>
  );
};

export default EditTodo;
