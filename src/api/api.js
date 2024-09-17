import axios from 'axios'

const BASE_URL = "http://51.250.113.72:8082/api/v1"

export const getTodos = async () => {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data;
};

export const addTodo = async (newTodo) => {
    return await axios.post(`${BASE_URL}/todos`, newTodo)
};

export const updateTodo = async (id, todo) => {
    console.log("api:");
    console.log(todo);
    return await axios.put(`${BASE_URL}/todos/${id}`, todo)
}

export const deleteTodo = async (id) => {
    return await axios.delete(`${BASE_URL}/todos/${id}`)
}