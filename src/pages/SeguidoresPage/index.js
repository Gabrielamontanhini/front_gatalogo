import { useEffect, useState } from "react";
import { InfosPerfil } from "../../components/InfosPerfil/InfosPerfil";
import { SeguidoresPageContainer } from "./styled";
import axios from "axios";
import { url } from "../../constants/constante";
import { useParams } from "react-router-dom";

export default function SeguidoresPage(){
    const {nickname} = useParams()
const [seguidores, setSeguidores]=useState([])

useEffect(()=> {
const seguidoresDoParametro = axios.get(`${url}/${nickname}/seguidores`)
seguidoresDoParametro.then((res)=> {
    setSeguidores(res.data)
})
seguidoresDoParametro.catch((err)=> {
    console.log(err.response)
})
})

    return (
        <SeguidoresPageContainer>
        <h1>{nickname} possui {seguidores.length} seguidores!</h1>
        <div className="seguidores_scroll">
        {seguidores.map((s) => (
                <InfosPerfil 
                    nome={s.nome}
                    nickname={s.nickname}
                    foto={s.foto}
                        biografia={s.biografia}
                        id={s.id}/>
            ))}
        </div>
        </SeguidoresPageContainer>
    )
}