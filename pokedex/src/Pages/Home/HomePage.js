
import { Flex, Heading} from "@chakra-ui/react";
import CardPokemon from "../../Components/CardPokemon/index"
import FooterSimple from "../../Components/Footer/index";
import HeaderSimple from "../../Components/Header/index";
import { ContainerHome } from "./style";
import { useContext } from 'react';
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import ModalSimple from "../../Components/Modal/Modal";

export default function HomePage() {
    const context = useContext(GlobalContext)
    const { filterPokedex,isOpen} = context;

    return (
        <ContainerHome >
            <HeaderSimple />
            <Flex minH={'100vh'} background={'#5E5E5E'} flexDir={'column'}>
                <Heading  m={'60px 110px 40px '} color={'#ffff'} >Todos os Pokemons</Heading>
            <Flex  flexWrap={'wrap'}
                justifyContent={'center'}
                alignItems={'center'}
                background={'#5E5E5E'}>
                {filterPokedex().map((pokemon) => {
                    return <CardPokemon key={pokemon.name}
                        pokemon={pokemon} />
                })}
            </Flex>
            </Flex>
              {  isOpen && <ModalSimple/>}   
            <FooterSimple />
        </ContainerHome>










    )


}