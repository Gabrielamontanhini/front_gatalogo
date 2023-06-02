import styled from "styled-components";

export const NovoPostContainer = styled.div`
width: 100%;
height: 90%;
overflow-y: scroll;
background-color: aquamarine;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
.mostrarPreview{
    display: ${props => props.display};
    flex-direction: column;
}
p{
    color: black;
}
.botao{
    width: 100%;
    display: flex;
    justify-content: center;
}
form{
    margin-top: 2%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: palegoldenrod;
    h2{
        width: 100%;
        display: flex;
        justify-content: center;
    }
}
`