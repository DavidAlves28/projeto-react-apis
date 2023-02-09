import styled from "styled-components"

export const ContainerHome = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 100%;
`
export const ContainerDetails = styled.section`
/* position: absolute; */
background-color: #5E5E5E;
min-width: 100vw;
min-height: 80vh;
left: 0px;
top: 0px;
`
export const ContainerPokemon = styled.section`
width: 96%;
min-height: 67vh;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: repeat(2,1fr);
margin: 2%;
background: #729F92;
border-radius: 37px;
`
export const CardImagem = styled.img`
/* position: absolute; */
width: 282px;
height: 282px;
left: 44px;
`
