
import { Flex, Heading} from "@chakra-ui/react";
import CardPokemon from "../../Components/CardPokemon/index"
import FooterSimple from "../../Components/Footer/index";
import HeaderSimple from "../../Components/Header/index";
import { ContainerHome } from "./style";
import { useContext } from 'react';
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import ModalSimple from "../../Components/Modal/Modal";


export default function PokedexPage() {
    // Context  retorna pokedex! 
    const context = useContext(GlobalContext);
    const { pokedex, isOpen } = context;


    return (
        <ContainerHome    >
            <HeaderSimple />
            <Flex minH={'100vh'}   background={'#5E5E5E'} flexDir={'column'} >
                <Heading m={'60px 110px 40px '} color={'#ffff'} >Meus Pokemons</Heading>
            <Flex   flexWrap={'wrap'}
                justifyContent={'center'}
                alignContent={'center'}
                background={'#5E5E5E'}
                gap={'30px'}
                m={'30px'}
                >
                {pokedex.sort((add, poke)=>{
                    return add.id - poke.id
                })
                .map((pokemon) => {
                    return <CardPokemon key={pokemon.name}
                        pokemon={pokemon} />
                })}
            </Flex>
            </Flex>
            
            <FooterSimple />
            {isOpen && <ModalSimple />}
        </ContainerHome>
    )


}