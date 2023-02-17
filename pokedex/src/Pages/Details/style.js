import styled from "styled-components"
import pokebola from '../../assets/imagem/pngwing2.png'


export const ContainerDetails = styled.section`
background-image: url(${pokebola});
background-repeat: no-repeat ;
background-position:  end;
background-size: 80%; 
background-color: #5E5E5E;
`
export const CardDetails = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${pokebola});
    background-repeat: no-repeat; 
    background-size: 80%;  
    background-position: center ; 
    margin-right: -20px;
    padding-left: 50px;
    z-index: 4;
   
    h3{
        font-size: 16px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        line-height: 19px;
        position: absolute;
        height: 19px;
        top: 25px;
        font-style: normal;
    }
    h2{
        position: absolute;
        height: 39px;
        top: 40px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 39px;
        text-transform: capitalize;
    }
`
export const CardTypes = styled.div`
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: 89px;
    gap: 16px;
`
export const ContainerInfoPokemon = styled.div`
        width: 100%;
        height: 20vh;
        display: flex;
        margin-top: 2.5vh;
        position: relative;
        h3{
            position: absolute;
            top: 15px;
            font-weight: 700;
        }
`