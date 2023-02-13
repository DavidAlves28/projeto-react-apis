import { useContext} from "react";
import {
  CardPokemon,
  CatchButton,
  TypesContainer,
  ContainerPoke,
  PokemonNumber,
  PokemonName,
  Pokemon,
  PokemonType,
  Pokeball, Details, ButtonRemove
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { getColors } from "../../utils/returnColors";
import pokeball from '../../assets/imagem/pngwing2.png'
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { BASE_URL } from './../../Constants/BASE_URL';
import { getTypes } from './../../utils/returnTypes';
import { goToDetails } from './../../routes/coordinator';
import { useRequestData } from "../../hooks/useRequestData";



export default function Card(props) {
  // location é usado para rotornar o nome da page para redenrizar os buttons do card.
  const location = useLocation()

  // navigate para enviar o parametro da função para ir para páginas.
  const navigate = useNavigate()

  // GlobalContext
  const context = useContext(GlobalContext)
  //  context 
  const { addPokedex, removePokemon, isLoading} = context;
  // props retorna pokemon, que será passado como parâmetro no hook useRequestData  
  const { pokemon } = props ;

  
  // Custom Hook que retorna os dados do pokemons.
  const [data, types,] = useRequestData(`${BASE_URL}/pokemon/${pokemon.name}`, {})
  
  return (
    <CardPokemon  >      
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

          <ContainerPoke key={data.id} color={types && getColors(types)} >
           { data.id < 10 ? 
           <PokemonNumber>#0{data.id}</PokemonNumber> : 
           <PokemonNumber>#{data.id}</PokemonNumber>}

            <PokemonName >{data.name} <TypesContainer>
            {data.types?.map((type,index) => {
                  return <PokemonType key={index} src={getTypes(type.type.name)} />
                })}
            </TypesContainer></PokemonName>

            <Pokeball src={pokeball} />
            <Pokemon src={data.sprites?.other["official-artwork"].front_default} alt='s' />  

            {location.pathname === '/' ? (<CatchButton onClick={() => addPokedex(data) }>
              Capturar!
            </CatchButton>) :
              (<ButtonRemove onClick={() => removePokemon(data)}>
                Excluir
              </ButtonRemove>)}
              
            <Details onClick={()=>{goToDetails(navigate,data.name)}}>Detalhes</Details>
          </ContainerPoke>
        )}



    </CardPokemon>
  )
}