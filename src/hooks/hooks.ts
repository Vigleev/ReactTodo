import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/api.js";
import FilterTypes from '../types/FilterTypes.ts'
import {FullTodoItem, NewTodoItem} from '../types/TodoItem'

export const useTodos = (status:FilterTypes) => {
    return useQuery(['todos', status],() => getTodos(status))
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

export const useUpdateTodo = (id:number) => {
    const queryClient = useQueryClient();
    return useMutation((newTodo:NewTodoItem) => updateTodo(id,newTodo), {
        onSuccess: () => queryClient.invalidateQueries('todos'),
        onError: (err => console.error(err))
    });
}
