import {BASE_URL} from "../../../shared/constants/constants";

export const getAllTodos = async() => {
    return await fetch(`${BASE_URL}/api/todo/all`).then(data => data.json())
}

