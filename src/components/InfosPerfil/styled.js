import styled from "styled-components";

export const InfosDoPerfilPadronizadas = styled.div`
width: 60%;
min-width: 360px;
height: 20vh;
min-height: 160px;
border: 3px solid black;
margin-bottom: 1vh;
background-color: lavenderblush;
display: flex;
justify-content: space-between;
.foto{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.informações{
    width: 70%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.identificação{
height: 60%;
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
p{
    margin-top: 2%;
    max-width: 90%;
}
}
.opções{
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
        width: 15%;
        min-width: fit-content;
        margin-left: 3%;
        color: plum;
    }
}
.botaoseguir{
    top: 10%;
    right: 10%;
    background-color: pink;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 90%;
    border-radius: 50%;
}
`