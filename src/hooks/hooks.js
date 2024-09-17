import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/api.js";

export const useTodos = () => {
    return useQuery('todos', getTodos)
}

export const useAddTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(addTodo, {
        onSuccess: () => queryClient.invalidateQueries('todos'),
    })
}

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteTodo, {
        onSuccess: () => queryClient.invalidateQueries('todos'),
    })
}

export const useUpdateTodo = (id) => {
    const queryClient = useQueryClient();
    return useMutation(newTodo => updateTodo(id,newTodo), {
        onSuccess: () => queryClient.invalidateQueries('todos'),
        onError: (err => console.error(err))
    });
}
