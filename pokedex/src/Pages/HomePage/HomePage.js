
import { Button, Flex, Heading} from "@chakra-ui/react";
import CardPokemon from "../../Components/CardPokemon/index"
import FooterSimple from "../../Components/Footer/index";
import HeaderSimple from "../../Components/Header/index";
import { ContainerHome } from "./style";
import { useContext } from 'react';
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import ModalSimple from "../../Components/Modal/Modal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function HomePage() {
    const context = useContext(GlobalContext)
    // import dos dados da GlobalState
    const { filterPokedex,isOpen,nextPokemons,previousPokemons} = context;

    return (
        <ContainerHome >
            <HeaderSimple />
            <Flex minH={'100vh'} background={'#5E5E5E'} flexDir={'column'}>
                <Heading  m={'60px 110px 40px '} color={'#ffff'} >Todos os Pokemons</Heading>
            <Flex  flexWrap={'wrap'}
                justifyContent={'center'}
                alignItems={'center'}
                background={'#5E5E5E'}
                gap={'30px'}
                m={'30px'}
                >
                {filterPokedex().map((pokemon) => {
                    return <CardPokemon key={pokemon.name}
                        pokemon={pokemon} />
                })}
            </Flex>
            <Flex w={'100%'} m={'10px'}  gap={'10px'} justifyContent={'center'}>
            <Button onEnded={'10px'} w={'20%'} colorScheme={'yellow'} onClick={()=>previousPokemons()}> <BsChevronLeft /> Voltar Lista</Button>
            <Button onEnded={'10px'} w={'20%'} colorScheme={'yellow'} onClick={()=>nextPokemons()}> Próxima Lista <BsChevronRight /></Button>
            </Flex>
            </Flex>
              {  isOpen && <ModalSimple/>}   
            <FooterSimple />
        </ContainerHome>










    )


}