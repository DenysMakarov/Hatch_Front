import {BASE_URL} from "../../../shared/constants/constants";
import axios from "axios";

export const getAllTodos = async () => {
    try {
        return await axios.get(`${BASE_URL}/all`).then(res => res.data)
    } catch (err) {
        console.error(`error: ${err}`)
        throw err
    }
}

export const addTodo = async (todo) => {
    try {
      return  await axios.post(`${BASE_URL}`, todo).then(res => res.data)
    } catch (err) {
        console.error(err)
    }
}

export const toggleTodo = async (id) => {
    try {
        return await axios.put(`${BASE_URL}/${id}/done`).then(res => res.data)
    } catch (err) {
        console.error(err)
    }
}

export const updateTitleTodo = async (id, title) => {
    try {
        return await axios.put(`${BASE_URL}/${id}/update`, {title}).then(res => res.data)
    } catch (err) {
        console.error(err)
    }
}

export const getAllByTitle = async (title) => {
    try {
        return  await axios.get(`${BASE_URL}/all/done/${title}`).then(res => res.data)
    } catch (err) {
        console.error(`error: ${err}`)
    }
}

export const deleteTodosByID = async (id) => {
    try {
        return await axios.delete(`${BASE_URL}/delete/${id}`).then(res => res.data)
    } catch (err) {
        console.error(`error: ${err}`)
    }
}

export const deleteAllTodos = async () => {
    try {
        return await axios.post(`${BASE_URL}/delete/all`).then(res => res.data)
    } catch (err) {
        console.error(`error: ${err}`)
    }
}




