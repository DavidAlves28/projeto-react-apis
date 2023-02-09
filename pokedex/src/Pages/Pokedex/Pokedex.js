
import { Flex, Heading, Stack } from "@chakra-ui/react";
import CardPokemon from "../../Components/CardPokemon/index"
import FooterSimple from "../../Components/Footer/index";
import HeaderSimple from "../../Components/Header/index";
import { ContainerHome } from "./style";
import { useContext } from 'react';
import { GlobalContext } from "../../GlobalContext/GlobalContext";


export default function PokedexPage() {
    const context = useContext(GlobalContext)
    const {pokedex } = context
    

   
    return (
        <ContainerHome  >
            <HeaderSimple />
            <Stack background={'#5E5E5E'} >
                <Heading color={'#ffff'} ml={'120px'} >Meus Pokemons</Heading>
            </Stack>
            <Flex flexWrap={'wrap'}
                justifyContent={'center'}
                alignItems={'center'}
                background={'#5E5E5E'}>
                {pokedex.map((pokemon) => {
                    return <CardPokemon key={pokemon.name}
                        pokemon={pokemon} />
                })}

            </Flex>
            <FooterSimple />
        </ContainerHome>
    )


}