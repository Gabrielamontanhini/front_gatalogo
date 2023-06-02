import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { url } from "../../constants/constante"
import axios from "axios"
import { SeguidoresPageContainer } from "../SeguidoresPage/styled"
import { InfosPerfil } from "../../components/InfosPerfil/InfosPerfil"

export default function SeguindoPage(){
    const {nickname} = useParams()
    const [seguindo, setSeguindo]=useState([])
    useEffect(()=> {
        const parametroSeguindo = axios.get(`${url}/${nickname}/seguindo`)
        parametroSeguindo.then((res)=> {
            setSeguindo(res.data)
        })
        parametroSeguindo.catch((err)=> {
            console.log(err.response)
        })
        })
    return (
        <SeguidoresPageContainer>
            <h1> {nickname} segue {seguindo.length} Perfis</h1>
            <div className="seguidores_scroll">
        {seguindo.map((s) => (
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