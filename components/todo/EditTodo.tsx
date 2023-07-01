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
import todoSchema from '@/lib/schema/todoSchema';

interface EditTodoProps {
  id: string;
  description: string;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTodo: React.FC<EditTodoProps> = ({
  id,
  description,
  isEditing,
  setIsEditing,
}) => {
  const { toast } = useToast();
  const { todos, setTodos } = useContext(TodoContext);
  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      description,
    },
  });

  function onSubmit(values: z.infer<typeof todoSchema>) {
    const newTodos = [
      ...todos.map((todo) => {
        return todo.id === id ? { ...todo, text: values.description } : todo;
      }),
    ];

    setTodos(newTodos);
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
                  <Input autoFocus className="border-none" {...field} />
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
