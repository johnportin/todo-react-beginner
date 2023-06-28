import { useForm } from 'react-hook-form';
import { useToast } from '../ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';

// shadcn-ui components
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

import * as z from 'zod';
import { useContext } from 'react';
import { TodoContext } from '@/context/TodoContext';

const addTodoSchema = z.object({
  description: z
    .string()
    .min(1, { message: 'todo must be at least 1 character' })
    .max(255, { message: 'todo must be less than 255 characters' }),
});

interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = () => {
  const { toast } = useToast();
  const { todos, setTodos } = useContext(TodoContext);

  const form = useForm<z.infer<typeof addTodoSchema>>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: {
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof addTodoSchema>) {
    setTodos([...todos, values.description]);

    toast({
      title: 'Todo added!',
      description: `You added ${values.description}`,
    });
  }

  const myClass = 'border border-gray-300 rounded-md p-2 m-2';

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border border-gray-300 rounded-md p-2 m-2"
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Todo</FormLabel>
              <FormControl>
                <Input placeholder="...your todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddTodo;
