import axios from "axios";
import Postagem from "../../components/Postagem/Postagem";
import { MainScrollEstilizado } from "./styled";
import { useEffect, useState } from "react";
import { url } from "../../constants/constante";

export default function FeedPage(){
    const [postagens, setPostagens]=useState([])
    useEffect(()=> {
        const feed = axios.get(`${url}/feed`)
    feed.then((res)=> {
        setPostagens(res.data)
    })
    feed.catch((err)=> console.log(err.response.data))
    })
    return (
        <MainScrollEstilizado> 
              {postagens.map((post)=> (
        <Postagem
        avatar={post.foto}
        nickname={post.nickname}
        nome={post.nome}
        foto={post.foto_post}
        descrição={post.descrição}
        id_post={post.id_post}
        id_postador={post.postador}
        hora={post.criação}
        />
    ))}
            
        </MainScrollEstilizado>
    )
}