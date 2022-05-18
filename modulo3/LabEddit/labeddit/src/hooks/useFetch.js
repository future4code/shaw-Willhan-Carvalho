import {useState, useEffect} from 'react'
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
    setIsLoading(true)
    axios.get(url)
        .then((res) => {
            setIsLoading(false)
            setData(res.data);
            
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        });

        }, [url]);

    return { data, isLoading, error }
}