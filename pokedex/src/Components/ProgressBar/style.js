import styled from "styled-components"

// const bgColor = c < 50 ? "#FF7C2D" : completed < 80 ? "#FFDD69" : "green" 

export const ContainerProgress = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    justify-items: flex-start;
    justify-self: flex-start;
    align-items: center;
    position: relative;    `

export const FillerStyles = styled.div`
    position: absolute;
    height: 10px;
    min-width: 0;
    max-width: 100%;
    width: ${(props) => props.color}%;
    background-color: ${(props) => props.bg};opacity:0.75;
    border-radius: 3px;
    text-align: 'right'; 
    `