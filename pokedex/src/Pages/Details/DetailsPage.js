import { Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import HeaderSimple from "../../Components/Header";
import { CardImagem, ContainerDetails, ContainerHome, ContainerPokemon } from "./style";
import { GlobalContext } from "../../GlobalContext/GlobalContext";


export default function DetailsPage () { 
    const context = useContext(GlobalContext)
    const {details} = context
  
    const getNamePokemon = details.map((poke )=>{
        return poke.name
    })
      return ( 
        <ContainerHome>
        <HeaderSimple/>
        <ContainerDetails>
        <Heading ml={'2%'} size={'2xl'} color={'#fff'}>Detalhes</Heading>
        <ContainerPokemon>
        <h1>{details[0].name}</h1>
        <CardImagem src={details[0].sprites?.front_default} alt='pokemon' />
        <CardImagem src={details[0].sprites?.back_default} alt='pokemon' />
        </ContainerPokemon>
        </ContainerDetails>
      


        </ContainerHome>
        
    )
    }

    // <Pokemon 
    //    src={pokemon.sprites?.other?.["official-artwork"]?.["front_default"]}  />