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
    // Detalhes do Pokemon
    const [details, setDetails] = useState({})        
    // Controlador do Modal para adicionar ou remover pokemon
    const { isOpen, onOpen, onClose } = useDisclosure()   
    
    // icone para loading
    const [isLoading, setIsLoading] = useState(true)
    
    // Contador para Paginas
    const [page, setPage] = useState(0)
    
    

    // Consumo Api pega os nomes e url dos 20 primeiros pokemons!
    const getPokemonsUrl = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon/?limit=10&offset=${page}0`)
            setListaPokemon(response.data.results);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(true)
            alert('Erro ao buscar lista de pokemons')
        }
    }

    // função para renderizar mais pokemons
    const nextPokemons = () => {
        setPage(+page + 1)       
        getPokemonsUrl()

    }
    // função para renderizar menos pokemons
    const previousPokemons = () => {
        setPage(page - 1)
        getPokemonsUrl()

    }
    //  Filter para não mostrar pokemons da pokedex na homePage
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
        onOpen() // Open Modal

    }
    //  Remove pokemon da pokedex
    const removePokemon = (deletePokemon) => {
        const newPokedex = pokedex.filter((pokemonInPokedex) =>
            pokemonInPokedex.id !== deletePokemon.id
        )
        setPokedex(newPokedex)
        onOpen() // Open Modal

    }
    //  Remove pokemon da pokedex pela page Details
    const removePokemonDetails = (deletePokemon) => {
        const newPokedex = pokedex.filter((pokemonInPokedex) =>
            pokemonInPokedex.name !== deletePokemon
        )
        setPokedex(newPokedex)
        onOpen() // Open Modal
    }

    // Button para ver detalhes do pokemons
    const showDetails = (newPokemon) => {
        const verificarPokemon = pokedex.find((pokemon) =>
            pokemon.name === newPokemon.name
        )
        if (!verificarPokemon) {
            const newPokedex = [...pokedex, newPokemon]
            setDetails(newPokedex)
        }

    }

    useEffect(() => {
        getPokemonsUrl() //  renderiza API
        setIsLoading(false)
    }, [page])

    const context = {
        listaPokemon,
        pokedex,
        addPokedex,
        removePokemon,
        isLoading,
        filterPokedex,
        setPokedex,
        details,
        setDetails,
        showDetails,
        onOpen,
        isOpen,
        onClose,
        removePokemonDetails,
        nextPokemons,
        previousPokemons

    }
    return (
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}