
import { useRef } from 'react';
import useAddTodo from './hooks/useAddTodo';

const TodoForm = () => {

  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo(() => ref.current?.value);

  return (
    <>
    {addTodo.error && <div className="alert alert-danger">{addTodo.error.message}</div>}

    <form className="row m-3" onSubmit={
    (event) => {
      event.preventDefault();
      
      if (ref.current && ref.current.value)
        addTodo.mutate({
          id: 0,
          title: ref.current?.value as string,
          userId: 1,
          completed: false
        })
      
    }}>

      <div className="col">
      
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button 
        disabled={addTodo.isPending} className="btn btn-primary">
          {addTodo.isPending ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
    </>
  );
};

export default TodoForm;
