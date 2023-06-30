import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TodoContext } from '@/context/TodoContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import * as z from 'zod';
import { useToast } from '../ui/use-toast';

interface EditTodoProps {
  id: string;
  description: string;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const addTodoSchema = z.object({
  description: z
    .string()
    .min(1, { message: 'todo must be at least 1 character' })
    .max(255, { message: 'todo must be less than 255 characters' }),
});

const EditTodo: React.FC<EditTodoProps> = ({
  id,
  description,
  isEditing,
  setIsEditing,
}) => {
  const { toast } = useToast();
  const { todos, setTodos } = useContext(TodoContext);
  const form = useForm<z.infer<typeof addTodoSchema>>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: {
      description,
    },
  });

  function onSubmit(values: z.infer<typeof addTodoSchema>) {
    const newTodos = [
      ...todos.filter((todo) => todo.id !== id),
      { id: id, text: values.description },
    ];
    setTodos(newTodos);

    toast({
      title: 'Todo Edited',
      description: `You changed ${values.description}`,
    });

    setIsEditing(false);
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-row gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="secondary" type="submit">
            Submit Edit
          </Button>
          <Button variant="destructive" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditTodo;
