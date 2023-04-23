import {BASE_URL} from "../../../shared/constants/constants";
import axios from "axios";

export const getAllTodos = async () => {
    try {
        return axios.get(`${BASE_URL}/api/todo/all`).then(res => res.data)
    } catch (err) {
        console.error(`error: ${err}`)
        throw err
    }
}

export const addTodo = async (todo) => {
    try {
        const newTodo = axios.post(`${BASE_URL}/api/todo`, todo).then(res => res.data)
        return newTodo
    } catch (err) {
        console.error(err)
    }
}

export const toggleTodo = async (id) => {
    console.log(id)
    try {
        return axios.put(`${BASE_URL}/api/todo/${id}/done`).then(res => res.data)
    } catch (err) {
        console.error(err)
    }
}


export const deleteTodosByID = async (id) => {
    try {
        return axios.delete(`${BASE_URL}/api/todo/delete/${id}`).then(res => res.data)
    } catch (err) {
        console.error(`error: ${err}`)
    }
}

export const deleteAllTodos = async () => {
    try {
        const count = axios.post(`${BASE_URL}/api/todo/delete/all`).then(res => res.data)
        return count
    } catch (err) {
        console.error(`error: ${err}`)
    }
}




