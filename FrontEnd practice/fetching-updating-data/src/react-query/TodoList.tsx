import useTodos  from "./hooks/todos";

const TodoList = () => {

  const { data: todos, error, isLoading} = useTodos();

  if (isLoading) return <p>Loading</p>

  if (error) return <p>{error.message}</p>;

  return (
    <div className='m-3'>
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
