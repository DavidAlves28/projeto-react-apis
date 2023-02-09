import { useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { BASE_URL } from '../Constants/BASE_URL'
import axios from 'axios'
import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import Modal from "../Components/Modal";
import { goToDetails } from './../routes/coordinator';

export default function GlobalState(props) {
    // ARRAY DOS POKEMONS DA API
    const [listaPokemon, setListaPokemon] = useState([])
    // ARRAY PARA POKEMONS DA POKEDEX ADD
    const [pokedex, setPokedex] = useState([])  
    const [details,setDetails] = useState({})
    // Modal para adicionar pokemon
    const [isOpenModal, setIsOpenModal] = useState(false)
    
    // icone para loading
    const [isLoading, setIsLoading] = useState(true)

    // Consumo Api pega os nomes e url dos 20 primeiros pokemons!
    const getPokemonsUrl = async () => {

        try {
            const response = await axios.get(`${BASE_URL}/pokemon/?offset=0&limit=20`)
            setListaPokemon(response.data.results);
        } catch (error) {
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
        setIsOpenModal(true)
       
    }
    //  Remove pokemon da pokedex
    const removePokemon = (deletePokemon) => {
        const newPokedex = pokedex.filter((pokemonInPokedex) =>
            pokemonInPokedex.id !== deletePokemon.id
        )
        setPokedex(newPokedex)
       
        localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }

    const showDetails = (navigate,newPokemon) =>{
        const verificarPokemon = pokedex.find((pokemon) =>
            pokemon.name === newPokemon.name
        )
        if (!verificarPokemon) {
            const newPokedex = [...pokedex, newPokemon]
            setDetails(newPokedex)
        }  
        goToDetails(navigate,newPokemon.id)
    }

    // return imagens Card pokemon 
    const returnImagens = (pokemon) => {
        const imagens0_9 = `https://www.serebii.net/swordshield/pokemon/00${pokemon.id}.png`
        const imagens10_99 = `https://www.serebii.net/swordshield/pokemon/0${pokemon.id}.png`
        const imagens = `https://www.serebii.net/swordshield/pokemon/${pokemon.id}.png`
        if (pokemon.id < 10) {
            return imagens0_9
        } else if (pokemon.id > 9) {
            return imagens10_99
        } else {
            return imagens
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
        returnImagens: returnImagens,
        isLoading: isLoading,
        filterPokedex: filterPokedex,
        setPokedex: setPokedex,
        setIsOpenModal:setIsOpenModal,
        isOpenModal:isOpenModal,
        details:details,
        setDetails: setDetails,
        showDetails:showDetails
    }
    return (
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}