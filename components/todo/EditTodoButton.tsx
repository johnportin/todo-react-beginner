import { HiPencil } from 'react-icons/hi';
import { useToast } from '../ui/use-toast';

interface EditTodoButtonProps {
  id: string;
  description: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}

const EditTodoButton: React.FC<EditTodoButtonProps> = ({
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
      <HiPencil size={24} />
    </div>
  );
};

export default EditTodoButton;
