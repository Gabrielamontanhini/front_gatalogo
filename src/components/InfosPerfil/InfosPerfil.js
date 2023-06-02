import { useNavigate } from "react-router-dom";
import { BolinhaEstilizada } from "../Bolinha/styled";
import { InfosDoPerfilPadronizadas } from "./styled";
import { useContext, useEffect, useState } from "react";
import { NicknameUsuarioContext } from "../../contexts/NicknameUsuarioContext";
import axios from "axios";
import { url } from "../../constants/constante";
import { UsuarioContext } from "../../contexts/UsuarioContext";

export function InfosPerfil({ nome, nickname, foto, biografia, id }) {
    const { sessao } = useContext(UsuarioContext)
    const [seguir, setSeguir] = useState("Seguir")
    const navigate = useNavigate()
    const idDeste = id
    const { nicknameUsuario } = useContext(NicknameUsuarioContext)
    const [seuNick, setSeuNick] = useState(nicknameUsuario)
const [seguidoresDesteId, setSeguidoresDesteId]=useState("... carregando...")
const [quemIdSegue, setQuemIdSegue]=useState("...carregando...")

    useEffect(() => {
        const parametroSeguindo = axios.get(`${url}/${nickname}/seguindo`)
        parametroSeguindo.then((res)=> {
            setQuemIdSegue(res.data.length)
        })
        parametroSeguindo.catch((err)=> {
            console.log(err.response)
        })
        if (seuNick == nickname) {
            setSeguir("é tu seu boca moli")
            const carregarSeguidores = axios.get(`${url}/${nickname}/seguidores`)
            carregarSeguidores.then((res)=> {
                setSeguidoresDesteId(res.data.length)
            })
            carregarSeguidores.catch((res)=> {
                console.log(res.data)
            }
            )
        } else {
            const carregarSeguidores = axios.get(`${url}/${nickname}/seguidores`)
            carregarSeguidores.then((res)=> {
                setSeguidoresDesteId(res.data.length)
                const seguesId = res.data.filter(seguidor => seguidor.nickname === `${nicknameUsuario}`)
                if (seguesId.length === 0) {
                    setSeguir("Seguir")
                } else {
                    setSeguir("Seguindo")
                }
            })
            carregarSeguidores.catch((res)=> {
                console.log(res.data)
            }
            )
        }
    },)



    function seguirEste(idDeste) {
        if (seguir === "Seguindo") {
            const config = { headers: { Authorization: `Bearer ${sessao}` } }
            const deixarDeSeguirUsuario = axios.delete(`${url}/seguir/${idDeste}`,config)
            deixarDeSeguirUsuario.then((res)=>{
                return setSeguir("Seguir")
            })
            deixarDeSeguirUsuario.catch((err)=> {
                console.log(err.response)
            })
        } else {
            const config = { headers: { Authorization: `Bearer ${sessao}` } }
            const seguirUsuario = axios.post(`${url}/seguir/${idDeste}`, {} ,config)
            seguirUsuario.then((res)=> {
                setSeguir("Seguindo")
            })
            seguirUsuario.catch((err)=> {
                console.log(err.response)
            })
        }
    }


    function irParaNick() {
        navigate(`/${nickname}`)
    }

    function verSeguidores() {
        navigate(`/${nickname}/seguidores`)
    }
    function verQuemSegue() {
        navigate(`/${nickname}/seguindo`)
    }
    return (
        <InfosDoPerfilPadronizadas key={id}>
            <div className="foto" onClick={irParaNick}>
                <BolinhaEstilizada>
                    <img src={foto} alt="" />
                </BolinhaEstilizada>
            </div>
            <div className="informações" >
                <div className="identificação" onClick={irParaNick}>
                    <h4>{nickname}</h4>
                    <h3>{nome}</h3>
                    <p>{biografia}</p>
                </div>
                <div className="opções">
                    <p onClick={verSeguidores}><p>Ver {seguidoresDesteId} seguidores</p> </p> <p onClick={verQuemSegue}><p>Ver {quemIdSegue} que {nickname} segue</p></p>
                </div>
            </div>
            <div className="botaoseguir" onClick={()=>seguirEste(idDeste)}>{seguir}</div>
        </InfosDoPerfilPadronizadas>
    )
}