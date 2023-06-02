
import { useNavigate } from "react-router-dom";
import { BolinhaEstilizada } from "../Bolinha/styled";
import { MeuPostPadronizado } from "./styled";
import { useContext, useEffect, useState } from "react";
import { url } from "../../constants/constante";
import { UsuarioContext } from "../../contexts/UsuarioContext";
import { FaCat, FaHeart } from 'react-icons/fa'
import axios from "axios";
import { NicknameUsuarioContext } from "../../contexts/NicknameUsuarioContext";

export default function Postagem({ avatar, nickname, nome, foto, descrição, id_post, id_postador, hora }) {
    const { sessao } = useContext(UsuarioContext)
    const [curtidas, setCurtidas] = useState("carregando...")
    const [carregar, setCarregar] = useState(true)
    const { nicknameUsuario } = useContext(NicknameUsuarioContext)


    useEffect(() => {
        const carregacurtidas = axios.get(`${url}/curtir/${id_post}`)
        carregacurtidas.then((res) => {
            setCurtidas(res.data.length)
            const curtiste = res.data.filter(curtido => curtido.nickname === `${nicknameUsuario}`)
            if (curtiste.length === 0) {
                setCarregar(true)
            } else {
                setCarregar(false)
            }
        })
        carregacurtidas.catch((err) => {
            console.log(err.message)
            alert(id_post)
        })
    }, [carregar])

    const navigate = useNavigate()
    function irParaNick() {
        navigate(`/${nickname}`)
    }

    function curtirPost() {
        if (nicknameUsuario === null) {
            alert("faça login para continuar")
            return
        }
        if (carregar === false) {
            const config = { headers: { Authorization: `Bearer ${sessao}` } }
            const descurtir = axios.delete(`${url}/descurtir/${id_post}`, config)
            descurtir.then((res) => {
                setCarregar(true)
            })
            descurtir.catch((err) => {
                console.log(err.response.message)
            })
            return
        }

        const body = { id: id_post, postador: id_postador }
        const config = { headers: { Authorization: `Bearer ${sessao}` } }
        const curte = axios.post(`${url}/curtir`, body, config)
        curte.then((res) => {
            setCarregar(false)
        })
        curte.catch((err) => console.log(err.response))
    }


    return (
        <MeuPostPadronizado key={id_post} carregar={carregar}>
            <div className="infos" onClick={irParaNick}>
                <BolinhaEstilizada>
                    <img src={avatar} alt="ue" />
                </BolinhaEstilizada>
                <h3>{nickname}</h3>
            </div>
            <div className="foto_post">
                <img src={foto} alt="foto" />
            </div>
            <div className="detalhes">
                <div className="curtidas">
                    <div onClick={curtirPost}>{carregar ? <FaCat /> : <FaHeart />} <p>{curtidas} pessoas curtiram isso! </p></div> <div>{hora}</div></div>
                <div className="descrição_post">
                    <p> {descrição}</p>
                </div>
            </div>
        </MeuPostPadronizado>
    )
}