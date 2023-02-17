import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestData(url, initialState) {
    // Custom hook , criado para retornar dados dos pokemons.
    // Será usado em CardPokemon e DetailsPage.
    const [data, setData] = useState(initialState)//Dados do pokemons!
    const [stat, setStat] = useState(initialState)//Dados do pokemons!
    const [types, setTypes] = useState(initialState) // Dados somente dos tipos.
    
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
   // Função para consumo API.
    const getData = () =>{       

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
            getData()       
    },[] )
    
    return [data,types ,stat,isLoading, error]
}
