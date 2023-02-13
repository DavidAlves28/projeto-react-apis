import { useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { BASE_URL } from '../Constants/BASE_URL'
import axios from 'axios'
import { useDisclosure } from "@chakra-ui/react";


export default function GlobalState(props) {
    // ARRAY DOS POKEMONS DA API
    const [listaPokemon, setListaPokemon] = useState([])
    // ARRAY PARA POKEMONS DA POKEDEX ADD
    const [pokedex, setPokedex] = useState([])  
    const [details,setDetails] = useState({})
    // const [nextPage,setNextPage] = useState(false)
    // Modal para adicionar pokemon
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [openModal , setOpenModal] = useState(false)
    // icone para loading
    const [isLoading, setIsLoading] = useState(true)

    // Consumo Api pega os nomes e url dos 20 primeiros pokemons!
    const getPokemonsUrl = async () => {

        try {
            const response = await axios.get(`${BASE_URL}/pokemon/?100=0&limit=21`)
            setListaPokemon(response.data.results);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(true)
            alert('Erro ao buscar lista de pokemons')
        }
    }
    //  Filter para não mostrar pokemons na pokedex 
    const filterPokedex = () => 
        listaPokemon.filter(
            (pokemonInList) => !pokedex.find(
                (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
            )
        )


    //  Adiciona pokemon a pokedex , verifica duplicidade!
    const addPokedex = (newPokemon) => {
        const verificarPokemon = pokedex.find((pokemon) =>
        pokemon.name === newPokemon.name
        )
        if (!verificarPokemon) {
            const newPokedex = [...pokedex, newPokemon]
            setPokedex(newPokedex)
        }  
             
        onOpen()
       
    }
    //  Remove pokemon da pokedex
    const removePokemon = (deletePokemon) => {
        const newPokedex = pokedex.filter((pokemonInPokedex) =>
            pokemonInPokedex.id !== deletePokemon.id
        )
        setPokedex(newPokedex)
        onOpen()
      
    }
     //  Remove pokemon da pokedex pela page Details
     const removePokemonDetails = (deletePokemon) => {
        const newPokedex = pokedex.filter((pokemonInPokedex) =>
        pokemonInPokedex.name !== deletePokemon
    )
    setPokedex(newPokedex)
    onOpen()
    }

    const showDetails = (newPokemon) =>{
        const verificarPokemon = pokedex.find((pokemon) =>
            pokemon.name === newPokemon.name
        )
        if (!verificarPokemon) {
            const newPokedex = [...pokedex, newPokemon]
            setDetails(newPokedex)
        }  
        
    }    


    
    useEffect(() => {
        getPokemonsUrl()
        setIsLoading(false)       
    }, [])
    const context = {
        listaPokemon: listaPokemon,
        pokedex: pokedex,
        addPokedex: addPokedex,
        removePokemon: removePokemon,       
        isLoading: isLoading,
        filterPokedex: filterPokedex,
        setPokedex: setPokedex,        
        details:details,
        setDetails: setDetails,
        showDetails:showDetails,
        onOpen: onOpen,
        isOpen:isOpen,
        onClose:onClose,
        openModal:openModal,
        setOpenModal:setOpenModal,
        removePokemonDetails:removePokemonDetails

    }
    return (
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}