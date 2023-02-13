import styled from "styled-components";


export const CardPokemon = styled.section` 
  display: flex;
  flex-wrap: wrap; 
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-end;
  

`

export const ContainerPoke = styled.div`
  padding: 10px;
  min-width: 400px;
  max-width: 440px;
  min-height: 210px;
  left: 0;
  top: 0;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
    flex-wrap: wrap;
  flex-direction:column;
  position: relative;
  margin: 30px;
  color: #ffffff;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;  
  text-align: left;  
`;

export const PokemonName = styled.h1`
text-transform:capitalize;
min-width: 159px;
height: 39px;
left: 23px;
top: 120px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
`;

export const PokemonType = styled.img`
  min-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display: flex;
  
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
top: -60px;
right: 0;
z-index: 2;
`
export const Details = styled.button `

width: 74px;
height: 24px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;


text-decoration-line: underline;

color: #FFFFFF;


position: absolute;
bottom: 10px;
flex: none;
order: 0;
flex-grow: 0;`

export const ButtonRemove = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FF6262;
border-radius: 8px;
border: none;
cursor: pointer;
position: absolute;
bottom: 10px;
right: 22px;
z-index: 2;
color: #000;

/* Inside auto layout */




`