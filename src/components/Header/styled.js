import styled from "styled-components";

export const MeuHeaderEstilizado = styled.header`
width: 100%;
height: 10%;
background-color: lavenderblush;
border: 2px solid black;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
.titulo{
    width: 80%;
}
.menu{
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    >svg{
        width: 35px;
        height: 35px;
    }
}
h1{
    color: black;
    font-size: 4rem;
    font-family: 'Allura', cursive;
    font-weight: 600;
    letter-spacing: 1px;
}
`