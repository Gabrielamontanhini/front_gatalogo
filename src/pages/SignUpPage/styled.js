import styled from "styled-components";


export const Pagina = styled.div`
width: 100%;
height: 90%;
margin-top: 2%;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: scroll;
form{
    width: 60%;
    min-width: 370px;
    min-height: 60vh;
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: lavenderblush;
}
input, textarea{
    width: 80%;
}
h1{
    color: black;
}
p{
    height: 4%;
}
`