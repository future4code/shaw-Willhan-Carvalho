import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const usePrivateRoute = () => {
    const history = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            history('/')
        }
    }, [history])
}