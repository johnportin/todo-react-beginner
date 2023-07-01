import { useForm } from 'react-hook-form';
import { useToast } from '../ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';

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
import todoSchema from '@/lib/schema/todoSchema';

const AddTodo: React.FC = () => {
  const { toast } = useToast();
  const { todos, setTodos } = useContext(TodoContext);

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof todoSchema>) {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: values.description,
        isComplete: false,
        isVisible: true,
      },
    ]);

    toast({
      title: 'Todo added!',
      description: `You added ${values.description}`,
    });

    form.reset();
  }

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
