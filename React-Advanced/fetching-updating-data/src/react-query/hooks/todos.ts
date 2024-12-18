// Creating a custom hook for fetching todos

import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "./constants";
import APIClient from "../serivces/apiClient";

const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
  });
};

export default useTodos;
