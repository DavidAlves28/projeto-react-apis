import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState)
    const [types, setTypes] = useState(initialState)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const location = useLocation()
    const {id} = useParams()
    const getData=()=>{
        
 console.log(location.pathname);
        axios.get(url)
        .then((res)=>{
            setIsLoading(false)
            setData(res.data)
            setTypes(res.data.types[0].type.name)
        })
        .catch((erro)=>{
            setIsLoading(false)
            setError(true)
        })
    }
    useEffect(() => {
        if(location.pathname === `/details/${id}`){
            getData()

        }
    }, [])
    return [data, types ,isLoading, error]
}
