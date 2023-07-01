import { Switch } from '@/components/ui/switch';
import { TodoContext } from '@/context/TodoContext';
import { useContext } from 'react';

const FilterTodos = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <div>
      <p>Show Completed</p>
      <Switch
        onCheckedChange={() => {
          setTodos(
            todos.map((todo) => {
              return todo.isComplete
                ? { ...todo, isVisible: !todo.isVisible }
                : todo;
            })
          );
        }}
      />
    </div>
  );
};

export default FilterTodos;
