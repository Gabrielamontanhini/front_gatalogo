import styled from "styled-components";


export const MenuEstilizado = styled.nav`
background-color: lavender;
display: flex;
flex-direction: column;
align-items: flex-end;
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 350px;
border: 2px solid plum;
.fechar{
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >svg{
    color: white;
    width: 35px;
    height: 35px;
    cursor: pointer;
}
}
animation: mostrarMenu .4s;

@keyframes mostrarMenu {
    from {
opacity: 0;
width: 0;
    }
    to{
opacity: 1;
width: 350px;
    }
}
`

export const Opções = styled.div`
margin-top: 5vh;
width: 100%;
`

export const ContainerIcone = styled.div`
display: flex;
align-items: center;
background-color: pink;
padding: 10px;
border-radius: 10px;
margin: 0 15px 20px;
>svg{
    width: 30px;
    height: 30px;
    margin: 0 20px;
}
&:hover{
    background-color: lavender;
}
`