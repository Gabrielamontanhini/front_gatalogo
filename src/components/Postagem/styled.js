import styled from "styled-components";

export const MeuPostPadronizado = styled.div`
width: 60%;
min-width: 360px;
margin-bottom: 2%;
display: flex;
flex-direction: column;
align-items: center;
background-color: lavenderblush;
.infos{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    p{
        margin-left: 1%;
    }
}
.foto_post{
    width: 90%;
    display: flex;
    justify-content: center;
    background-color: rgba(255,250,250, 0.5);
    img{
        max-width: 100%;
    }
}
.detalhes{
    width: 90%;
}
.curtidas{
    min-height: fit-content;
    display: flex;
    justify-content: space-between;
    svg{
        color: ${(props) => (props.carregar === true ? "pink" : "plum")};
        width: 40px;
        height: 45px;
    }
    div{
        height: 25px;
        display: flex;
        align-items: center;
    }
}
.descrição_post{
    display: flex;
        align-items: center;
    min-height: 8vh;
    max-width: 80%;
    margin: auto;
}
`