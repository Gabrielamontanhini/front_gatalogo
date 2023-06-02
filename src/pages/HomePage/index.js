import { useParams } from "react-router-dom";
import { InfosPerfil } from "../../components/InfosPerfil/InfosPerfil";
import Postagem from "../../components/Postagem/Postagem";
import { DivScrollEstilizada } from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../constants/constante";



export default function HomePage() {
    const { nickname } = useParams()
    const [infos, setInfos] = useState({ nome: "Carregando", biografia: "Carregando", foto: "https://i.redd.it/7iyjin6f64561.jpg" })
    const [postagens, setPostagens] = useState([])

    useEffect(() => {
        const pegarPerfil = axios.get(`${url}/usuarios/${nickname}`)
        pegarPerfil.then((res) => {
            setInfos(res.data[0])
            setPostagens(res.data[1])
        })
        pegarPerfil.catch((err) => {
            console.log(err.response.message)
        })
    })
    return (
        <>
            <InfosPerfil
                nome={infos.nome}
                nickname={infos.nickname}
                foto={infos.foto}
                biografia={infos.biografia}
                id={infos.id} />
            <DivScrollEstilizada>



                {postagens.map((post) => (
                    <Postagem
                        nickname={post.nickname}
                        avatar={post.avatar}
                        nome={post.nome}
                        foto={post.foto_post}
                        descrição={post.descrição}
                        id_post={post.id_post}
                        id_postador={post.id_usuario}
                        hora={post.criação}
                    />
                ))}
            </DivScrollEstilizada>
        </>
    )
}