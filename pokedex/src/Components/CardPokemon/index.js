import { useContext, useEffect, useState } from "react";
import {
  CardPokemon,
  CatchButton,
  TypesContainer,
  ContainerPoke,
  PokemonNumber,
  PokemonName,
  Pokemon,
  PokemonType,
  Pokeball, Details
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { getColors } from "../../utils/returnColors";
import pokeball from '../../assets/imagem/pngwing2.png'
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { BASE_URL } from './../../Constants/BASE_URL';
import axios from 'axios'
import { getTypes } from './../../utils/returnTypes';
import Modal from './../Modal';
import { goToDetails} from './../../routes/coordinator';

export default function Card(props) {
  const location = useLocation()
  const navigate = useNavigate()
  // GlobalContext
  const context = useContext(GlobalContext)
  //  context 
  const { addPokedex, removePokemon, returnImagens, isLoading,showDetails} = context
  const { pokemon } = props
  // estado para todos os dados dos pokemons.
  const [dataPokemon, setDataPokemon] = useState({})
  // estado para os types dos pokemons.
  const [types, setTypes] = useState([])

  // API get data dos pokemons
  const {isOpenModal,setIsOpenModal} = useState(false)
  const getDataPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pokemon/${pokemon.name}`)
      setDataPokemon(response.data);
      setTypes(response.data.types)
    } catch (error) {
      console.log(error);
    }
  }

  // retorna tag com o  type do pokemon.
  const getDataTypes = types.map((type, index) => {
    return <PokemonType key={index} src={getTypes(type.type.name)} alt='' />
  })
  // retorna apenas os nomes dos types.
  const getNameTypes = types.map((type => type.type.name))
  useEffect(() => {
    getDataPokemon()
  }, [])
  
  return (
    <CardPokemon >
      {isOpenModal && Modal }
      {isLoading ? (
        <ContainerPoke> <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> </ContainerPoke>
      ) :
        (

          <ContainerPoke key={dataPokemon.id} color={getColors(getNameTypes[0])} >
            <PokemonNumber>#{dataPokemon.id}</PokemonNumber>
            <PokemonName >{dataPokemon.name} <TypesContainer>
              {getDataTypes}
            </TypesContainer></PokemonName>
            <Pokeball src={pokeball} />
            <Pokemon src={returnImagens(dataPokemon)} alt='s' />
            {location.pathname === '/' ? (<CatchButton onClick={() => addPokedex(dataPokemon) }>
              Capturar!
            </CatchButton>) :
              (<CatchButton onClick={() => removePokemon(dataPokemon)}>
                Remover da Pokedex
              </CatchButton>)}
            <Details onClick={()=>{showDetails(navigate,dataPokemon)}}>Detalhes</Details>
          </ContainerPoke>
        )}



    </CardPokemon>
  )
}