import { Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import PokemonHeader from '../../assets/imagem/PokemonHeader.png'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import { ButtonToHome, Header } from './style'
import { BsChevronLeft } from "react-icons/bs";
import { useContext } from 'react';

import { GlobalContext } from '../../GlobalContext/GlobalContext'
export default function HeaderSimple() {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  // Context 
  const context = useContext(GlobalContext)
  const {removePokemon ,pokedex} = context
  const getNameForDelete = pokedex.map((poke=>poke.name))
  
  const SwitchHeader = () => {
    switch (location.pathname) {
      case '/':
        return (
          <Grid templateColumns={'repeat(3,1fr)'} gap='4'>
            <GridItem>
            </GridItem>
            <GridItem m='3'>
              <Image src={PokemonHeader} />
            </GridItem>
            <GridItem alignSelf={'center'}>
              <Button h={'8vh'} onClick={() => goToPokedex(navigate)} w={'60%'} colorScheme='blue'>Pokedex</Button>
            </GridItem>


          </Grid>
        );
      case '/pokedex':
        return (
          <Grid templateColumns={'repeat(3,1fr)'} gap='4'>
            <GridItem alignSelf={'center'} justifySelf={'center'}  >

              <ButtonToHome onClick={() => goToHome(navigate)}> <BsChevronLeft /> Todos Pokemons</ButtonToHome>
            </GridItem>
            <GridItem m={'3'} >
              <Image src={PokemonHeader} />
            </GridItem>
            <GridItem>
            </GridItem>

          </Grid>
        )
      case `/details/${id}`:
        return (
          <Grid templateColumns={'repeat(3,1fr)'} gap='4'>
            <GridItem alignSelf={'center'} justifySelf={'center'}  >

              <ButtonToHome onClick={() => goToHome(navigate)}> <BsChevronLeft /> Todos Pokemons</ButtonToHome>

            </GridItem>
            <GridItem m='3'>
              <Image src={PokemonHeader} />
            </GridItem>
            <GridItem alignSelf={'center'}>
              <Button h={'8vh'} onClick={() => removePokemon(getNameForDelete)} w={'60%'} colorScheme='blue'>Excluir da Pokedex</Button>
            </GridItem>


          </Grid>
        )
      default:
        return (
          <Grid w={'50vh'} templateColumns={'1fr'} m='0 auto' >
            <Image src={PokemonHeader} />
            <Flex flexDirection={'column'}
              justifyContent={'space-around'} >
              <Button onClick={() => goToHome(navigate)} w={'287px'} colorScheme='blue'>Voltar para Home</Button>
            </Flex>
            <Text m={'0 auto'} as='b'>Página não encontrada!</Text>
          </Grid>
        )
    }


  }


  return (

    <>{SwitchHeader()}</>
  )
}

