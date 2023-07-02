import { Switch } from '@/components/ui/switch';
import { TodoContext } from '@/context/TodoContext';
import { useContext, useState } from 'react';

const FilterTodos = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-row justify-between">
      {isChecked ? <p>Hide completed</p> : <p>Show completed</p>}
      <Switch
        onCheckedChange={() => {
          setTodos(
            todos.map((todo) => {
              return todo.isComplete
                ? { ...todo, isVisible: !todo.isVisible }
                : todo;
            })
          );
          setIsChecked(!isChecked);
        }}
      />
    </div>
  );
};

export default FilterTodos;
