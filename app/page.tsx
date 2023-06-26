import TodoContainer from '@/components/todo/TodoContainer';
import TodoList from '@/components/todo/TodoList';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <TodoContainer>
        <TodoList />
      </TodoContainer>
    </main>
  );
}
