import {useEffect, useMemo, useRef, useState} from "react";
import {BASE_URL} from "../../../shared/constants/constants";
import axios from "axios";
import {isEqual} from "lodash";


export const useTodos = () => {
    const [todos, setTodos] = useState({doneTodos: [], undoneTodos: []});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const prevResponse = useRef(null);

    const fetchTodos = async () => {
        try {
            const data = await axios.get(`${BASE_URL}/api/todo/all`).then(res => res.data);
            if (!isEqual(data, prevResponse.current)) {
                setTodos({...data});
                setLoading(false);
            }
            prevResponse.current = data;
        } catch (error) {
            setError(error);
            setLoading(true);
        }
    };

    useEffect(() => {
        fetchTodos();
        const interval = setInterval(fetchTodos, 6000);
        return () => clearInterval(interval);
    }, []);

    const value = useMemo(() => ({ todos, loading, error }), [todos, loading, error]);
    return value;
};