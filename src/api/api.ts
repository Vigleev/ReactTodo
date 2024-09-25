import axios from 'axios'
import {NewTodoItem,FullTodoItem} from '../types/TodoItem'
import FilterTypes from '../types/FilterTypes.ts'

const BASE_URL = "https://easydev.club/api/v1"

export const getTodos = async (status:FilterTypes) => {
    const response = await axios.get(`${BASE_URL}/todos?filter=${status}`);
    console.log("fetched with:",status);
    return response.data;
};

export const addTodo = async (newTodo:NewTodoItem) => {
    return await axios.post(`${BASE_URL}/todos`, newTodo)
};

export const updateTodo = async (id:number, todo:NewTodoItem) => {
    console.log("api:");
    console.log(todo);
    return await axios.put(`${BASE_URL}/todos/${id}`, todo)
}

export const deleteTodo = async (id:number) => {
    return await axios.delete(`${BASE_URL}/todos/${id}`)
}