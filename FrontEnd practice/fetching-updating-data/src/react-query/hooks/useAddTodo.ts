import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_TODOS } from './constants';
import { Todo } from './todos';
import APIClient from '../serivces/apiClient';

const apiClient = new APIClient<Todo>('/todos');

interface AddTodoContext {
    prevTodos: Todo[] | undefined;
  }

const useAddTodo = (onAdd: () => void) => {
    const QueryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,

    onMutate: (newTodo: Todo) => {
      const prevTodos = QueryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS)
      // updating the todos: first approach (not recommended), invalidates the cache
      // QueryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS });

      // setting the cache directly
      QueryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [newTodo, ...(todos || [])]);

      onAdd();
      return { prevTodos}
    },

    onSuccess: (savedTodo, newTodo) => {
      QueryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => todos?.map(todo => todo === newTodo ? savedTodo : todo));
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      QueryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.prevTodos);
    }
  })

}

export default useAddTodo;